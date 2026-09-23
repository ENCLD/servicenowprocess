import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {feiltekst, hentOversiktHandlers, lagreHandlers, statusVisning, varsleLagret} from '../felles/data';
import {valider} from '../felles/regler';
import styles from './styles.scss';

const TOMT = {konsulent: '', kunde: '', fra: '', til: '', prosent: '100'};

// K1 – registrer allokering med alle felt fra SPEC seksjon 3
const view = (state, {dispatch}) => {
	const status = statusVisning(state);
	if (status) return status;
	const {utkast, skjemafeil, lagrer, melding} = state;
	const endre = (navn) => (e) => dispatch('RA_ENDRE', {[navn]: e.target.value});
	const valg = (navn, tekst, liste) => (
		<label>
			{tekst}
			<select required on-change={endre(navn)}>
				<option value="" selected={!utkast[navn]}>Velg …</option>
				{liste.map((x) => (
					<option key={x.sys_id} value={x.sys_id} selected={utkast[navn] === x.sys_id}>{x.navn}</option>
				))}
			</select>
		</label>
	);
	const felt = (navn, tekst, type, ekstra = {}) => (
		<label>
			{tekst}
			<input type={type} value={utkast[navn]} required {...ekstra} on-input={endre(navn)} />
		</label>
	);
	return (
		<section className="ra-kort">
			<h2 className="ra-tittel">Ny allokering</h2>
			<div className="ra-felter">
				{valg('konsulent', 'Konsulent', state.data.konsulenter)}
				{valg('kunde', 'Kunde', state.data.kunder)}
				{felt('fra', 'Fra-dato', 'date')}
				{felt('til', 'Til-dato', 'date')}
				{felt('prosent', 'Prosent', 'number', {min: 1, max: 100, step: 1})}
			</div>
			{skjemafeil.length > 0 && <p className="ra-feil" role="alert">Ikke lagret: {skjemafeil.join(' ')}</p>}
			{melding && <p className="ra-ok" role="status">{melding}</p>}
			<div className="ra-knapper">
				<button type="button" className="ra-knapp ra-knapp--primaer" disabled={lagrer} on-click={() => dispatch('RA_LAGRE')}>
					{lagrer ? 'Lagrer …' : 'Lagre allokering'}
				</button>
				<button type="button" className="ra-knapp" disabled={lagrer} on-click={() => dispatch('RA_NULLSTILL')}>
					Tøm skjema
				</button>
			</div>
		</section>
	);
};

createCustomElement('x-2207143-ra-ny-allokering', {
	renderer: {type: snabbdom},
	view,
	initialState: {data: null, laster: true, feil: null, skjemafeil: [], utkast: TOMT, lagrer: false, melding: null},
	actionHandlers: {
		...hentOversiktHandlers,
		...lagreHandlers,
		RA_ENDRE: ({action, state, updateState}) => updateState({utkast: {...state.utkast, ...action.payload}, melding: null}),
		RA_NULLSTILL: ({updateState}) => updateState({utkast: TOMT, skjemafeil: [], melding: null}),
		RA_LAGRE: ({state, dispatch, updateState}) => {
			const u = state.utkast;
			const feil = [...(u.konsulent ? [] : ['Velg konsulent.']), ...(u.kunde ? [] : ['Velg kunde.']), ...valider(u)];
			if (feil.length) return updateState({skjemafeil: feil, melding: null});
			updateState({lagrer: true, skjemafeil: []});
			dispatch('RA_OPPRETT', {
				felter: {konsulent: u.konsulent, kunde: u.kunde, fra_dato: u.fra, til_dato: u.til, prosent: Number(u.prosent)}
			});
		},
		RA_LAGRET_OK: ({action, dispatch, updateState}) => {
			updateState({lagrer: false, utkast: TOMT, melding: 'Allokeringen er lagret.'});
			varsleLagret(dispatch, action.payload && action.payload.result);
		},
		RA_LAGRET_FEIL: ({action, updateState}) =>
			updateState({lagrer: false, skjemafeil: [`Kunne ikke lagre: ${feiltekst(action.payload)}`]})
	},
	styles
});
