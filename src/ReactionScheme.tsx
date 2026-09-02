import type { ReactionScheme as Scheme } from './types'

function Carbon({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r="4" fill="#173f48" />
}

function Bond({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#173f48" strokeWidth="3" strokeLinecap="round" />
}

function SecButyl({ leavingGroup }: { leavingGroup: string }) {
  return <g><Bond x1={42} y1={70} x2={88} y2={48} /><Bond x1={88} y1={48} x2={134} y2={70} /><Bond x1={88} y1={48} x2={88} y2={98} /><Carbon x={42} y={70} /><Carbon x={88} y={48} /><Carbon x={134} y={70} /><text x="80" y="123" className="scheme-label leaving">{leavingGroup}</text></g>
}

function TertButyl({ leavingGroup }: { leavingGroup: string }) {
  return <g><Carbon x={88} y={63} /><Bond x1={88} y1={63} x2={48} y2={38} /><Bond x1={88} y1={63} x2={48} y2={88} /><Bond x1={88} y1={63} x2={128} y2={38} /><text x="30" y="34" className="scheme-label">CH₃</text><text x="30" y="107" className="scheme-label">CH₃</text><text x="129" y="34" className="scheme-label">CH₃</text><Bond x1={88} y1={63} x2={88} y2={113} /><text x="80" y="139" className="scheme-label leaving">{leavingGroup}</text></g>
}

export default function ReactionScheme({ scheme }: { scheme: Scheme }) {
  const content = {
    'bromoethane-iodide': <><g><text x="13" y="77" className="scheme-label leaving">Br</text><Bond x1={43} y1={68} x2={85} y2={68} /><Bond x1={85} y1={68} x2={128} y2={68} /><Carbon x={85} y={68} /><Carbon x={128} y={68} /></g><text x="154" y="77" className="scheme-reagent">+ I⁻</text></>,
    'tertbutyl-water': <><TertButyl leavingGroup="Cl" /><text x="174" y="77" className="scheme-reagent">+ H₂O</text></>,
    'secbutyl-bulky-base': <><SecButyl leavingGroup="Br" /><text x="164" y="77" className="scheme-reagent">+ ⁻OtBu</text></>,
    'tertbutyl-heat': <><TertButyl leavingGroup="Br" /><text x="174" y="77" className="scheme-reagent">+ EtOH</text></>,
    'secbutyl-ethoxide': <><SecButyl leavingGroup="Br" /><text x="164" y="77" className="scheme-reagent">+ ⁻OEt</text></>
  }[scheme.kind]

  return <figure className="reaction-scheme" aria-label={`Reaction scheme. Conditions: ${scheme.conditions}`}>
    <svg viewBox="0 0 455 155" role="img" aria-hidden="true">
      {content}
      <line x1="267" y1="68" x2="369" y2="68" className="reaction-arrow" />
      <path d="M369 68 l-11 -7 M369 68 l-11 7" className="reaction-arrow" />
      <text x="281" y="39" className="scheme-condition">{scheme.conditions}</text>
      <text x="400" y="78" className="product-question">?</text>
    </svg>
    <figcaption>Identify the major pathway or product outcome for this reaction.</figcaption>
  </figure>
}
