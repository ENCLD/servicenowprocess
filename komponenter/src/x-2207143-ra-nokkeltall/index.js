import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {hentOversiktHandlers, statusVisning} from '../felles/data';
import styles from './styles.scss';

// K7 – aktive kontrakter, allokerte plasser og kontrakter som slutter innen 30 dager
const view = (state) => {
	const status = statusVisning(state);
	if (status) return status;
	const t = state.data.nokkeltall;
	const kort = [
		{tekst: 'Aktive kontrakter', verdi: t.aktiveKontrakter, farge: 'info'},
		{tekst: 'Allokerte plasser', verdi: t.allokertePlasser, farge: 'positiv'},
		{tekst: 'Slutter innen 30 dager', verdi: t.slutterInnen30, farge: 'advarsel'}
	];
	return (
		<section className="ra-nokkeltall" aria-label="Nøkkeltall">
			{kort.map((k) => (
				<div key={k.tekst} className={`ra-kort ra-nokkeltall__kort ra-nokkeltall__kort--${k.farge}`}>
					<span className="ra-nokkeltall__verdi">{k.verdi}</span>
					<span className="ra-dempet">{k.tekst}</span>
				</div>
			))}
		</section>
	);
};

createCustomElement('x-2207143-ra-nokkeltall', {
	renderer: {type: snabbdom},
	view,
	initialState: {data: null, laster: true, feil: null},
	actionHandlers: {...hentOversiktHandlers},
	styles
});
