// Samme K1-regler som forretningsregelen på serveren, sjekket før lagring slik at
// brukeren får en tydelig melding. Serveren avviser uansett ugyldige verdier.
const DATO = /^\d{4}-\d{2}-\d{2}$/;

export function valider({fra, til, prosent}) {
	const feil = [];
	if (!DATO.test(fra || '')) feil.push('Fra-dato må fylles ut (ÅÅÅÅ-MM-DD).');
	if (!DATO.test(til || '')) feil.push('Til-dato må fylles ut (ÅÅÅÅ-MM-DD).');
	const p = Number(prosent);
	if (!Number.isInteger(p) || p < 1 || p > 100) feil.push('Prosent må være et heltall mellom 1 og 100.');
	if (DATO.test(fra || '') && DATO.test(til || '') && til < fra) feil.push('Til-dato kan ikke være før fra-dato.');
	return feil;
}

const dagnr = (dato) => Date.parse(`${dato}T00:00:00Z`) / 86400000;
const iso = (d) => d.toISOString().substring(0, 10);

// Tidsvindu: fra starten av måneden to måneder før i dag til slutten av måneden ni måneder frem
export function lagVindu(iDag) {
	const [aar, mnd] = iDag.split('-').map(Number);
	const fra = iso(new Date(Date.UTC(aar, mnd - 3, 1)));
	const til = iso(new Date(Date.UTC(aar, mnd + 9, 0)));
	return {fra, til, dager: dagnr(til) - dagnr(fra) + 1};
}

export const venstre = (v, dato) => ((dagnr(dato) - dagnr(v.fra)) / v.dager) * 100;
export const bredde = (v, fra, til) => ((dagnr(til) - dagnr(fra) + 1) / v.dager) * 100;
export const synlig = (v, a) => a.fra <= v.til && a.til >= v.fra;
export const klipp = (v, a) => ({fra: a.fra < v.fra ? v.fra : a.fra, til: a.til > v.til ? v.til : a.til});

// Overlappende allokeringer får hvert sitt spor, slik at alle perioder synes
export function fordelSpor(allokeringer) {
	const slutt = [];
	const spor = {};
	[...allokeringer].sort((a, b) => (a.fra < b.fra ? -1 : 1)).forEach((a) => {
		let i = slutt.findIndex((s) => s < a.fra);
		if (i === -1) i = slutt.push('') - 1;
		slutt[i] = a.til;
		spor[a.sys_id] = i;
	});
	return spor;
}

export function maaneder(v) {
	const liste = [];
	const start = new Date(`${v.fra}T00:00:00Z`);
	for (let d = start; iso(d) <= v.til; d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1))) {
		liste.push({dato: iso(d), navn: d.toLocaleDateString('nb-NO', {month: 'short', year: '2-digit', timeZone: 'UTC'})});
	}
	return liste;
}
