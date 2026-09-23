import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {TABELL, feiltekst, hentOversiktHandlers, lagreHandlers, statusVisning, varsleLagret} from '../felles/data';
import {bredde, fordelSpor, klipp, lagVindu, maaneder, synlig, valider, venstre} from '../felles/regler';
import styles from './styles.scss';

const SPOR_REM = 2.25;

// K6 – redigering av fra-dato, til-dato og prosent direkte i tidslinjen
const redigering = (a, {utkast, lagreFeil, lagrer}, dispatch) => {
	const endret = utkast.fra !== a.fra || utkast.til !== a.til || String(utkast.prosent) !== String(a.prosent);
	const felt = (navn, tekst, type, ekstra = {}) => (
		<label>
			{tekst}
			<input
				type={type}
				value={utkast[navn]}
				required
				{...ekstra}
				on-input={(e) => dispatch('RA_ENDRE', {[navn]: e.target.value})}
			/>
		</label>
	);
	return (
		<div className="ra-redigering" role="group" aria-label={`Rediger ${a.kundeNavn} for ${a.konsulentNavn}`}>
			<strong>{a.konsulentNavn} · {a.kundeNavn}</strong>
			<div className="ra-felter">
				{felt('fra', 'Fra-dato', 'date')}
				{felt('til', 'Til-dato', 'date')}
				{felt('prosent', 'Prosent', 'number', {min: 1, max: 100, step: 1})}
			</div>
			{lagreFeil.length > 0 && (
				<p className="ra-feil" role="alert">Ikke lagret: {lagreFeil.join(' ')}</p>
			)}
			<div className="ra-knapper">
				<button type="button" className="ra-knapp ra-knapp--primaer" disabled={lagrer || !endret} on-click={() => dispatch('RA_LAGRE')}>
					{lagrer ? 'Lagrer …' : 'Lagre'}
				</button>
				<button type="button" className="ra-knapp" disabled={lagrer} on-click={() => dispatch('RA_VELG', {sysId: null})}>
					Avbryt
				</button>
				<a className="ra-lenke" href={`/${TABELL}.do?sys_id=${a.sys_id}`} target="_blank" rel="noopener">
					Åpne skjema
				</a>
			</div>
		</div>
	);
};

const rad = (k, state, vindu, dispatch) => {
	const {data, valgt} = state;
	const egne = data.allokeringer.filter((a) => a.konsulent === k.sys_id && synlig(vindu, a));
	const spor = fordelSpor(egne);
	const antallSpor = Math.max(1, ...Object.values(spor).map((s) => s + 1));
	const redigeres = egne.find((a) => a.sys_id === valgt);
	return (
		<div key={k.sys_id} className="ra-tl__gruppe">
			<div className="ra-tl__rad">
				<div className="ra-tl__navn">
					<span>{k.navn}</span>
					<small className={k.overallokeringer.length ? 'ra-over' : 'ra-dempet'}>
						{k.tittel} · {k.totalIDag} % i dag{k.overallokeringer.length ? ' · overallokert' : ''}
					</small>
				</div>
				<div className="ra-tl__spor" style={{height: `${antallSpor * SPOR_REM + 0.5}rem`}}>
					<span className="ra-tl__idag" style={{left: `${venstre(vindu, data.iDag)}%`}} />
					{egne.length === 0 && <span className="ra-tl__ingen">Ingen oppdrag</span>}
					{egne.map((a) => {
						const vist = klipp(vindu, a);
						const tekst = `${a.kundeNavn} · ${a.prosent} %`;
						const klasser = ['ra-periode', a.overallokert ? 'ra-periode--over' : '', a.sys_id === valgt ? 'ra-periode--valgt' : '']
							.filter(Boolean)
							.join(' ');
						return (
							<button
								type="button"
								key={a.sys_id}
								className={klasser}
								style={{
									left: `${venstre(vindu, vist.fra)}%`,
									width: `${bredde(vindu, vist.fra, vist.til)}%`,
									top: `${(spor[a.sys_id] || 0) * SPOR_REM + 0.25}rem`
								}}
								title={`${tekst} (${a.fra} – ${a.til})${a.overallokert ? ' – overallokert' : ''}`}
								aria-label={`${tekst}, ${a.fra} til ${a.til}. Rediger.`}
								aria-expanded={a.sys_id === valgt ? 'true' : 'false'}
								on-click={() => dispatch('RA_VELG', {sysId: a.sys_id === valgt ? null : a.sys_id})}>
								{tekst}
							</button>
						);
					})}
				</div>
			</div>
			{redigeres && redigering(redigeres, state, dispatch)}
		</div>
	);
};

// K5 – én rad per konsulent, allokeringene som perioder langs en tidsakse
const view = (state, {dispatch}) => {
	const status = statusVisning(state);
	if (status) return status;
	const vindu = lagVindu(state.data.iDag);
	return (
		<section className="ra-kort">
			<h2 className="ra-tittel">Tidslinje</h2>
			<p className="ra-dempet">
				{vindu.fra} – {vindu.til}. Klikk på en periode for å endre datoer og prosent.
			</p>
			<div className="ra-tl">
				<div className="ra-tl__rad ra-tl__rad--akse" aria-hidden="true">
					<div className="ra-tl__navn" />
					<div className="ra-tl__spor">
						{maaneder(vindu).map((m) => (
							<span key={m.dato} className="ra-tl__maaned" style={{left: `${venstre(vindu, m.dato)}%`}}>
								{m.navn}
							</span>
						))}
					</div>
				</div>
				{state.data.konsulenter.map((k) => rad(k, state, vindu, dispatch))}
			</div>
		</section>
	);
};

createCustomElement('x-2207143-ra-tidslinje', {
	renderer: {type: snabbdom},
	view,
	initialState: {data: null, laster: true, feil: null, valgt: null, utkast: null, lagreFeil: [], lagrer: false},
	actionHandlers: {
		...hentOversiktHandlers,
		...lagreHandlers,
		RA_VELG: ({action, state, updateState}) => {
			const a = state.data.allokeringer.find((x) => x.sys_id === action.payload.sysId);
			updateState({
				valgt: a ? a.sys_id : null,
				utkast: a ? {fra: a.fra, til: a.til, prosent: String(a.prosent)} : null,
				lagreFeil: []
			});
		},
		RA_ENDRE: ({action, state, updateState}) => updateState({utkast: {...state.utkast, ...action.payload}}),
		RA_LAGRE: ({state, dispatch, updateState}) => {
			const feil = valider(state.utkast);
			if (feil.length) return updateState({lagreFeil: feil});
			updateState({lagrer: true, lagreFeil: []});
			dispatch('RA_OPPDATER', {
				sys_id: state.valgt,
				felter: {fra_dato: state.utkast.fra, til_dato: state.utkast.til, prosent: Number(state.utkast.prosent)}
			});
		},
		RA_LAGRET_OK: ({state, dispatch, updateState}) => {
			const sysId = state.valgt;
			updateState({lagrer: false, valgt: null, utkast: null});
			varsleLagret(dispatch, {sys_id: sysId});
		},
		RA_LAGRET_FEIL: ({action, updateState}) =>
			updateState({lagrer: false, lagreFeil: [`Kunne ikke lagre: ${feiltekst(action.payload)}`]})
	},
	styles
});
