import { useState } from 'react'
import { useStored, hoje } from '../hooks.js'
import { Icon } from '../components/ui.jsx'

const GLASS = 'M40 30 H160 L148 230 Q147 244 133 244 H67 Q53 244 52 230 Z'

export default function Hidratar() {
  const [peso, setPeso] = useStored('mg-peso', 70)
  const [min, setMin] = useState(30)
  const [copos, setCopos] = useStored('mg-copos-' + hoje(), 0)

  const ml = peso * 35 + peso * 6 * (min / 60)
  const meta = Math.max(1, Math.round(ml / 250))
  const frac = Math.min(1, copos / meta)
  const litros = (ml / 1000).toFixed(1).replace('.', ',')


  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Hidratar</span>
        <h1>Já se hidratou hoje?</h1>
        <p className="lead">
          Água é um dos componentes mais importantes do corpo humano. Em dias muito quentes principalmente a hidratação é essencial.
        </p>
      </header>

      <section className="hydra card">
        <div className="glass-wrap">
          <svg viewBox="0 0 200 260" className="glass" role="img" aria-label={`${copos} de ${meta} copos bebidos`}>
            <defs>
              <clipPath id="glassClip">
                <path d={GLASS} />
              </clipPath>
            </defs>
            <g clipPath="url(#glassClip)">
              <rect x="0" y="30" width="200" height="214" fill="var(--water-soft)" />
              <rect
                x="0"
                y="30"
                width="200"
                height="214"
                fill="var(--water)"
                style={{
                  transformOrigin: '100px 244px',
                  transform: `scaleY(${frac})`,
                  transition: 'transform .7s cubic-bezier(.3,.8,.3,1)',
                }}
              />
            </g>
            <path d={GLASS} fill="none" stroke="var(--ink)" strokeWidth="5" strokeLinejoin="round" opacity=".85" />
          </svg>
          <div className="glass-label">
            <strong>{copos}</strong>
            <span>de {meta} copos</span>
          </div>
        </div>

        <div className="hydra-side">
          <div>
            <span className="eyebrow">Sua meta de hoje</span>
            <p className="big">{litros} litros</p>
            <p className="muted">São cerca de {meta} copos de 250 ml.</p>
          </div>

          <div className="field">
            <label htmlFor="peso">Seu peso: <strong>{peso} kg</strong></label>
            <input id="peso" type="range" min="30" max="150" value={peso} onChange={(e) => setPeso(+e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="min">Exercício hoje: <strong>{min} min</strong></label>
            <input id="min" type="range" min="0" max="120" step="10" value={min} onChange={(e) => setMin(+e.target.value)} />
          </div>

          <div className="stepper">
            <button type="button" className="btn ghost round" onClick={() => setCopos((c) => Math.max(0, c - 1))} aria-label="Tirar um copo">
              <Icon name="minus" />
            </button>
            <button type="button" className="btn water" onClick={() => setCopos((c) => c + 1)}>
              <Icon name="plus" size={18} /> Bebi um copo
            </button>
            <button type="button" className="btn ghost small" onClick={() => setCopos(0)}>Zerar</button>
          </div>
        </div>
      </section>     
    </div>
  )
}
