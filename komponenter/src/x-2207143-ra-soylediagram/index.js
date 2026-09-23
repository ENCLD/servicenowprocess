import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import {hentOversiktHandlers, statusVisning} from '../felles/data';
import styles from './styles.scss';

const HOYDE = 240;
const TOPP = 20;
const BUNN = 40;

// K4 – total allokering (%) per konsulent i dag, med 100 %-linje
const view = (state) => {
	const status = statusVisning(state);
	if (status) return status;
	const konsulenter = state.data.konsulenter;
	const maks = Math.max(125, Math.ceil(Math.max(0, ...konsulenter.map((k) => k.totalIDag)) / 25) * 25);
	const bredde = Math.max(480, konsulenter.length * 80);
	const kol = bredde / Math.max(konsulenter.length, 1);
	const y = (v) => TOPP + (HOYDE - TOPP - BUNN) * (1 - v / maks);

	return (
		<section className="ra-kort">
			<h2 className="ra-tittel">Total allokering i dag</h2>
			<div className="ra-diagram">
				<svg attr-viewBox={`0 0 ${bredde} ${HOYDE}`} attr-role="img" aria-label="Søylediagram over total allokering per konsulent i dag">
					{konsulenter.map((k, i) => {
						const x = i * kol + kol * 0.2;
						const klasse = k.totalIDag > 100 ? 'over' : k.totalIDag < 100 ? 'under' : 'full';
						return (
							<g key={k.sys_id}>
								<title>{`${k.navn}: ${k.totalIDag} %`}</title>
								<rect attr-class={`ra-soyle ra-soyle--${klasse}`} attr-x={x} attr-y={y(k.totalIDag)} attr-width={kol * 0.6} attr-height={Math.max(0, y(0) - y(k.totalIDag))} attr-rx="3" />
								<text attr-class="ra-etikett" attr-x={x + kol * 0.3} attr-y={y(k.totalIDag) - 5} attr-text-anchor="middle">{`${k.totalIDag} %`}</text>
								<text attr-class="ra-etikett ra-etikett--navn" attr-x={x + kol * 0.3} attr-y={HOYDE - BUNN + 18} attr-text-anchor="middle">{k.navn.split(' ')[0]}</text>
							</g>
						);
					})}
					<line attr-class="ra-grense" attr-x1="0" attr-x2={bredde} attr-y1={y(100)} attr-y2={y(100)} />
					<text attr-class="ra-etikett ra-etikett--grense" attr-x={bredde - 4} attr-y={y(100) - 5} attr-text-anchor="end">100 %</text>
					<line attr-class="ra-akse" attr-x1="0" attr-x2={bredde} attr-y1={y(0)} attr-y2={y(0)} />
				</svg>
			</div>
		</section>
	);
};

createCustomElement('x-2207143-ra-soylediagram', {
	renderer: {type: snabbdom},
	view,
	initialState: {data: null, laster: true, feil: null},
	actionHandlers: {...hentOversiktHandlers},
	styles
});
