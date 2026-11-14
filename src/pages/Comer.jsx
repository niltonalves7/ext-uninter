import { useState } from 'react'
import { useStored } from '../hooks.js'
import { Icon } from '../components/ui.jsx'
import { PRATO, TROCAS } from '../data.js'

const C = 2 * Math.PI * 40 
const FATIAS = {
  veg: { len: C * 0.5, off: 0 },
  base: { len: C * 0.25, off: -C * 0.5 },
  prot: { len: C * 0.25, off: -C * 0.75 },
}

export default function Comer() {
  const [parte, setParte] = useState('veg')
  const p = PRATO.find((x) => x.id === parte)

  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Comer bem</span>
        <h1>Alimentação saudável</h1>
        <p className="lead">
          Se alimente com comida de verdade, alimentos naturais como carnes, ovos, frutas e verduras.
          Evite ultraprocessados como salgadinho, biscoito recheado e refrigerante.
        </p>
      </header>

      <section className="plate card">
        <div className="plate-art">
          <svg viewBox="0 0 120 120" role="img" aria-label="Prato dividido: metade legumes e verduras, um quarto arroz e feijão, um quarto proteína">
            <circle cx="60" cy="60" r="56" fill="var(--surface)" stroke="var(--line)" strokeWidth="3" />
            <g transform="rotate(-90 60 60)" fill="none">
              {PRATO.map((x) => (
                <circle
                  key={x.id}
                  cx="60"
                  cy="60"
                  r="40"
                  stroke={x.cor}
                  strokeWidth={parte === x.id ? 30 : 24}
                  strokeDasharray={`${FATIAS[x.id].len - 1.5} ${C}`}
                  strokeDashoffset={FATIAS[x.id].off}
                  style={{ cursor: 'pointer', transition: 'stroke-width .25s' }}
                  onClick={() => setParte(x.id)}
                />
              ))}
            </g>
          </svg>
        </div>
        <div className="plate-info">
          <span className="eyebrow"></span>
          <div className="plate-tabs" role="group" aria-label="Partes do prato">
            {PRATO.map((x) => (
              <button key={x.id} type="button" className="plate-btn" aria-pressed={parte === x.id} onClick={() => setParte(x.id)}>
                <span className="dot" style={{ background: x.cor }} />
                {x.nome}
              </button>
            ))}
          </div>
          <div className="plate-text" aria-live="polite">
            <h2>{p.nome}</h2>
            <p className="tag">{p.parte}</p>
            <p>{p.texto}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Troque</h2>
        </div>
        <div className="swaps">
          {TROCAS.map(([de, para]) => (
            <div key={de} className="swap">
              <span className="swap-from">{de}</span>
              <Icon name="arrow" size={18} />
              <span className="swap-to">{para}</span>
            </div>
          ))}
        </div>
      </section>      
    </div>
  )
}
