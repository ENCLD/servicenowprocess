import {actionTypes} from '@servicenow/ui-core';
import {createHttpEffect} from '@servicenow/ui-effect-http';

const {COMPONENT_BOOTSTRAPPED, COMPONENT_CONNECTED, COMPONENT_DISCONNECTED} = actionTypes;

// All beregning (SPEC seksjon 5) gjøres av REST-API-et i appen x_2207143_ra_b1,
// slik at alle komponentene viser de samme tallene.
const OVERSIKT_URL = '/api/x_2207143_ra_b1/ra/oversikt';
export const TABELL = 'x_2207143_ra_b1_allokering';

// Sendes ut til UI Builder etter lagring, og på vinduet slik at de andre
// komponentene på siden henter data på nytt uten oppsett (K6).
export const LAGRET = 'RA_ALLOKERING_LAGRET';
const VINDUSHENDELSE = 'x-2207143-ra-lagret';

const lyttere = new WeakMap();

export function feiltekst(payload) {
	const feil = payload && (payload.data || payload.response || payload);
	const detalj = feil && feil.error;
	if (detalj && (detalj.message || detalj.detail)) {
		return [detalj.message, detalj.detail].filter(Boolean).join(': ');
	}
	return (payload && (payload.statusText || payload.message)) || 'Ukjent feil';
}

export const hentOversiktHandlers = {
	[COMPONENT_BOOTSTRAPPED]: ({dispatch}) => dispatch('RA_HENT'),
	[COMPONENT_CONNECTED]: ({host, dispatch}) => {
		const hent = () => dispatch('RA_HENT');
		lyttere.set(host, hent);
		window.addEventListener(VINDUSHENDELSE, hent);
	},
	[COMPONENT_DISCONNECTED]: ({host}) => {
		window.removeEventListener(VINDUSHENDELSE, lyttere.get(host));
		lyttere.delete(host);
	},
	RA_HENT: createHttpEffect(OVERSIKT_URL, {
		method: 'GET',
		batch: false,
		startActionType: 'RA_HENT_START',
		successActionType: 'RA_HENT_OK',
		errorActionType: 'RA_HENT_FEIL'
	}),
	RA_HENT_START: ({updateState}) => updateState({laster: true}),
	RA_HENT_OK: ({action, updateState}) =>
		updateState({laster: false, feil: null, data: action.payload.result}),
	RA_HENT_FEIL: ({action, updateState}) =>
		updateState({laster: false, feil: feiltekst(action.payload)})
};

export const lagreHandlers = {
	RA_OPPDATER: createHttpEffect(`/api/now/table/${TABELL}/:sys_id`, {
		method: 'PATCH',
		batch: false,
		pathParams: ['sys_id'],
		dataParam: 'felter',
		successActionType: 'RA_LAGRET_OK',
		errorActionType: 'RA_LAGRET_FEIL'
	}),
	RA_OPPRETT: createHttpEffect(`/api/now/table/${TABELL}`, {
		method: 'POST',
		batch: false,
		dataParam: 'felter',
		successActionType: 'RA_LAGRET_OK',
		errorActionType: 'RA_LAGRET_FEIL'
	})
};

export function varsleLagret(dispatch, allokering) {
	dispatch(LAGRET, {sysId: allokering && allokering.sys_id});
	window.dispatchEvent(new CustomEvent(VINDUSHENDELSE));
}

// Felles tilstand for laste-/feilvisning
export const statusVisning = ({laster, feil, data}) => {
	if (feil) return <p className="ra-feil" role="alert">Kunne ikke hente data: {feil}</p>;
	if (!data && laster) return <p className="ra-dempet">Henter data …</p>;
	return null;
};
