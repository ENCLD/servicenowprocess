// Local stand-in for the ServiceNow Table API, backed by fixtures pulled
// from the PDI via `now-sdk query`. Point your app's instance URL at this
// server during local dev/test instead of the real instance.
//
// Run:   node src/mock/server.js
// Then:  GET/POST/PATCH/DELETE http://localhost:3000/api/now/table/<table>

const http = require('http')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const PORT = process.env.MOCK_PORT || 3000
const FIXTURES_DIR = path.join(__dirname, 'fixtures')

const tables = new Map()

function loadTable(table) {
    if (tables.has(table)) return tables.get(table)
    const file = path.join(FIXTURES_DIR, `${table}.json`)
    const records = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []
    tables.set(table, records)
    return records
}

// Supports a small subset of encoded query syntax: field=value and
// field!=value clauses joined with ^. Good enough for local filtering;
// it is not a reimplementation of the real query parser.
function applyQuery(records, query) {
    if (!query) return records
    const clauses = query.split('^')
    return records.filter((record) =>
        clauses.every((clause) => {
            const neq = clause.split('!=')
            if (neq.length === 2) return String(record[neq[0]]) !== neq[1]
            const [field, value] = clause.split('=')
            if (value === undefined) return true
            return String(record[field]) === value
        })
    )
}

function send(res, status, body) {
    const json = JSON.stringify(body)
    res.writeHead(status, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(json) })
    res.end(json)
}

function readBody(req) {
    return new Promise((resolve, reject) => {
        let raw = ''
        req.on('data', (chunk) => (raw += chunk))
        req.on('end', () => {
            if (!raw) return resolve({})
            try {
                resolve(JSON.parse(raw))
            } catch (err) {
                reject(err)
            }
        })
        req.on('error', reject)
    })
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`)
    const match = url.pathname.match(/^\/api\/now\/table\/([^/]+)(?:\/([^/]+))?$/)
    if (!match) return send(res, 404, { error: { message: 'Unknown route' } })

    const [, table, sysId] = match
    const records = loadTable(table)

    if (req.method === 'GET' && !sysId) {
        const query = url.searchParams.get('sysparm_query')
        const limit = Number(url.searchParams.get('sysparm_limit')) || 100
        const offset = Number(url.searchParams.get('sysparm_offset')) || 0
        const filtered = applyQuery(records, query)
        return send(res, 200, { result: filtered.slice(offset, offset + limit) })
    }

    if (req.method === 'GET' && sysId) {
        const record = records.find((r) => r.sys_id === sysId)
        if (!record) return send(res, 404, { error: { message: 'Record not found' } })
        return send(res, 200, { result: record })
    }

    if (req.method === 'POST' && !sysId) {
        const body = await readBody(req)
        const record = { sys_id: crypto.randomUUID(), ...body }
        records.push(record)
        return send(res, 201, { result: record })
    }

    if (req.method === 'PATCH' && sysId) {
        const body = await readBody(req)
        const record = records.find((r) => r.sys_id === sysId)
        if (!record) return send(res, 404, { error: { message: 'Record not found' } })
        Object.assign(record, body)
        return send(res, 200, { result: record })
    }

    if (req.method === 'DELETE' && sysId) {
        const index = records.findIndex((r) => r.sys_id === sysId)
        if (index === -1) return send(res, 404, { error: { message: 'Record not found' } })
        records.splice(index, 1)
        return send(res, 204, {})
    }

    send(res, 405, { error: { message: 'Method not supported' } })
})

server.listen(PORT, () => {
    console.log(`ServiceNow Table API mock listening on http://localhost:${PORT}`)
    console.log(`Fixtures loaded from ${FIXTURES_DIR}`)
})
