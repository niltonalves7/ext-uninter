function Palm({ transform }) {
  return (
    <g transform={transform}>
      <path d="M92 332 Q99 272 96 212" stroke="var(--trunk)" strokeWidth="7" fill="none" strokeLinecap="round" />
      <g stroke="var(--palm)" strokeWidth="6" fill="none" strokeLinecap="round">
        <path d="M96 212 Q70 190 38 206" />
        <path d="M96 212 Q88 182 68 164" />
        <path d="M96 212 Q112 178 140 170" />
        <path d="M96 212 Q124 192 152 210" />
        <path d="M96 212 Q96 184 102 158" />
      </g>
    </g>
  )
}

export function Scene() {
  return (
    <svg
      className="scene"
      viewBox="0 0 520 420"
      role="img"
      aria-label="Pessoa correndo numa estrada entre morros e palmeiras de buriti, com o sol ao fundo"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--sky-top)' }} />
          <stop offset="1" style={{ stopColor: 'var(--sky-bottom)' }} />
        </linearGradient>
      </defs>
      <rect width="520" height="420" fill="url(#sky)" />
      <circle cx="390" cy="112" r="78" fill="var(--sun)" opacity=".22" />
      <circle cx="390" cy="112" r="48" fill="var(--sun)" />
      <g fill="var(--cloud)">
        <ellipse cx="120" cy="92" rx="48" ry="14" />
        <ellipse cx="152" cy="80" rx="30" ry="12" />
        <ellipse cx="280" cy="156" rx="40" ry="11" />
      </g>
      <path d="M0 300 Q120 238 262 286 T520 268 V420 H0Z" fill="var(--hill-far)" />
      <path d="M0 344 Q150 292 300 338 T520 322 V420 H0Z" fill="var(--hill-near)" />
      <path d="M176 420 Q250 352 312 334 L334 336 Q288 366 280 420Z" fill="var(--road)" />
      <Palm transform="translate(0 0)" />
      <Palm transform="translate(356 56) scale(.8)" />
      <ellipse cx="292" cy="334" rx="40" ry="6" fill="#000" opacity=".12" />
      <g
        transform="translate(0 40)"
        stroke="var(--ink)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <circle cx="302" cy="170" r="14" fill="var(--ink)" stroke="none" />
        <path d="M298 188 L288 236" />
        <path d="M298 198 L322 214 L336 200" />
        <path d="M298 198 L276 212 L262 228" />
        <path d="M288 236 L316 256 L310 292" />
        <path d="M288 236 L262 262 L236 252" />
      </g>
    </svg>
  )
}

export function Figure({ poses, bench }) {
  return (
    <svg className="figure" viewBox="0 0 140 110" role="img" aria-hidden="true">
      <line x1="6" y1="102" x2="134" y2="102" stroke="var(--line)" strokeWidth="4" strokeLinecap="round" />
      {bench && <rect x="104" y="64" width="26" height="38" rx="4" fill="var(--sun-soft)" stroke="var(--sun)" strokeWidth="3" />}
      {poses.map((p, i) => (
        <g key={i} className={poses.length > 1 ? `pose pose-${i}` : ''}>
          <circle cx={p.head[0]} cy={p.head[1]} r="9" fill="var(--green)" />
          {p.lines.map((l, j) => (
            <polyline
              key={j}
              points={l.join(' ')}
              fill="none"
              stroke="var(--green)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>
      ))}
    </svg>
  )
}
