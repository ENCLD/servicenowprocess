import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {hentOversiktHandlers, statusVisning} from '../felles/data';
import styles from './styles.scss';

// K3 – tydelig advarsel når en konsulent er over 100 % i en overlappende periode
const view = (state) => {
	const status = statusVisning(state);
	if (status) return status;
	const perioder = state.data.konsulenter.flatMap((k) =>
		k.overallokeringer.map((o) => ({navn: k.navn, ...o}))
	);
	if (perioder.length === 0) {
		return <p className="ra-kort ra-dempet">Ingen konsulenter er overallokert.</p>;
	}
	return (
		<section className="ra-varsel" role="alert">
			<h2 className="ra-tittel">Overallokering</h2>
			<ul>
				{perioder.map((p) => (
					<li key={`${p.navn}-${p.dato}`}>
						<strong>{p.navn}</strong>: {p.sum} % fra {p.dato} til {p.til}
					</li>
				))}
			</ul>
			<p className="ra-dempet">Allokeringene er lagret, men summen er over 100 % i periodene over.</p>
		</section>
	);
};

createCustomElement('x-2207143-ra-overallokering', {
	renderer: {type: snabbdom},
	view,
	initialState: {data: null, laster: true, feil: null},
	actionHandlers: {...hentOversiktHandlers},
	styles
});
