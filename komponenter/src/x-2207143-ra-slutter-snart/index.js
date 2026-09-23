import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {hentOversiktHandlers, statusVisning} from '../felles/data';
import styles from './styles.scss';

// K8 – konsulent, kunde og til-dato, sortert etter nærmeste dato (sortert på serveren)
const view = (state) => {
	const status = statusVisning(state);
	if (status) return status;
	const rader = state.data.slutterSnart;
	return (
		<section className="ra-kort">
			<h2 className="ra-tittel">Oppdrag som slutter innen 30 dager</h2>
			{rader.length === 0 ? (
				<p className="ra-dempet">Ingen oppdrag slutter de neste 30 dagene.</p>
			) : (
				<table className="ra-tabell">
					<thead>
						<tr>
							<th scope="col">Konsulent</th>
							<th scope="col">Kunde</th>
							<th scope="col">Til-dato</th>
						</tr>
					</thead>
					<tbody>
						{rader.map((r) => (
							<tr key={r.sys_id}>
								<td>{r.konsulentNavn}</td>
								<td>{r.kundeNavn}</td>
								<td>{r.til}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</section>
	);
};

createCustomElement('x-2207143-ra-slutter-snart', {
	renderer: {type: snabbdom},
	view,
	initialState: {data: null, laster: true, feil: null},
	actionHandlers: {...hentOversiktHandlers},
	styles
});
