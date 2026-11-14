import { Figure } from '../components/art.jsx'
import { EXERCICIOS, HORARIOS } from '../data.js'

export default function Treinar() {

  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Treinar</span>
        <h1>Exercícios que podem ser feitos ao ar livre</h1>
        <p className="lead">
          Se exercitar com o peso do corpo, na praça ou na rua, é gratuito e melhora a saúde física e mental.
        </p>
      </header>

      <section className="section">
        <div className="section-head">
          <h3>Exercícios com o peso do corpo</h3>
          <p>Em caso de dúvidas específicas, consulte um profissional de educação física.</p>
        </div>
        <div className="ex-grid">
          {EXERCICIOS.map((e) => (
            <article key={e.id} className="ex-card">
              <div className="ex-fig">
                <Figure poses={e.poses} bench={e.bench} />
              </div>
              <div className="ex-body">
                <span className="tag">{e.grupo}</span>
                <h3>{e.nome}</h3>
                <p className="ex-dose">{e.dose}</p>
                <p>{e.dica}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Melhor horário no calor do Tocantins</h2>
          <p>Treine cedo ou no fim da tarde, procure sombra, use boné e protetor solar e leve água.</p>
        </div>
        <div className="hours card" role="img" aria-label="Das 5h às 9h e das 18h às 20h é ideal. Das 10h às 16h evite treinar.">
          <div className="hours-bar">
            {HORARIOS.map((h) => (
              <div key={h.de} className={`hour hour-${h.tipo}`} style={{ flex: h.ate - h.de }}>
                <span>{h.nome}</span>
              </div>
            ))}
          </div>
          <div className="hours-scale">
            {HORARIOS.map((h) => (
              <span key={h.de} style={{ flex: h.ate - h.de }}>{h.de}h</span>
            ))}
            <span className="hours-end">{HORARIOS[HORARIOS.length - 1].ate}h</span>
          </div>
        </div>
      </section>
    </div>
  )
}
