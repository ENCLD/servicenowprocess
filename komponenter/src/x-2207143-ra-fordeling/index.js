import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {hentOversiktHandlers, statusVisning} from '../felles/data';
import styles from './styles.scss';

// K2 – total fordeling per konsulent i dag, og K9 – hvem som trenger oppdrag
const view = (state) => {
	const status = statusVisning(state);
	if (status) return status;
	const {konsulenter, trengerOppdrag} = state.data;
	return (
		<div className="ra-to">
			<section className="ra-kort">
				<h2 className="ra-tittel">Total fordeling per konsulent</h2>
				<p className="ra-dempet">Sum av aktive allokeringer i dag</p>
				<table className="ra-tabell">
					<thead>
						<tr>
							<th scope="col">Konsulent</th>
							<th scope="col">Tittel</th>
							<th scope="col" className="ra-tall">I dag</th>
						</tr>
					</thead>
					<tbody>
						{konsulenter.map((k) => (
							<tr key={k.sys_id} className={k.totalIDag > 100 ? 'ra-over' : ''}>
								<td>{k.navn}</td>
								<td>{k.tittel}</td>
								<td className="ra-tall">{k.totalIDag} %</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
			<section className="ra-kort">
				<h2 className="ra-tittel">Trenger oppdrag</h2>
				<p className="ra-dempet">Under 100 % en eller flere dager de neste 30 dagene</p>
				{trengerOppdrag.length === 0 ? (
					<p className="ra-dempet">Alle er fullt allokert de neste 30 dagene.</p>
				) : (
					<table className="ra-tabell">
						<thead>
							<tr>
								<th scope="col">Konsulent</th>
								<th scope="col" className="ra-tall">Ledig kapasitet</th>
							</tr>
						</thead>
						<tbody>
							{trengerOppdrag.map((t) => (
								<tr key={t.sys_id}>
									<td>{t.navn}</td>
									<td className="ra-tall">{t.ledigKapasitet} %</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</section>
		</div>
	);
};

createCustomElement('x-2207143-ra-fordeling', {
	renderer: {type: snabbdom},
	view,
	initialState: {data: null, laster: true, feil: null},
	actionHandlers: {...hentOversiktHandlers},
	styles
});
