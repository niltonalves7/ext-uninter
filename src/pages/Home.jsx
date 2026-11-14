import { Icon } from '../components/ui.jsx'
import { Scene } from '../components/art.jsx'

const PILARES = [
  { to: 'treinar', icon: 'pulse', cor: 'green', titulo: 'Treinar', texto: 'Exercícios com o peso do corpo que podem ser feitos ao ar livre, na praça ou na rua.' },
  { to: 'hidratar', icon: 'drop', cor: 'water', titulo: 'Hidratar', texto: 'Beba água ao longo do dia.' },
  { to: 'comer', icon: 'leaf', cor: 'sun', titulo: 'Comer bem', texto: 'Alimentação saudável com comida de verdade.' },
]

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-text">
          <span className="eyebrow">Saúde e qualidade de vida</span>
          <p>Informativo:</p>
          <h1>Se exercite, beba água e se Alimente bem.</h1>
          <p className="lead">
            Exercícios ao ar livre, hidratação e um pouco sobre alimentação saldável online e gratuitamente.
          </p>
          <div className="actions">
            <a className="btn" href="#treinar">
              Exercícios <Icon name="arrow" size={18} />
            </a>
            <a className="btn ghost" href="#comer">
              Alimentação
            </a>
          </div>
          <ul className="chips">
            <li><Icon name="clock" size={18} /> Exercícios físicos 3x por semana</li>
            <li><Icon name="drop" size={18} /> Beba água ao longo do dia</li>
          </ul>
        </div>
        <div className="hero-art">
          <Scene />
        </div>
      </section>

      <section className="container section">
        <div className="pillars">
          {PILARES.map((p) => (
            <a key={p.to} href={`#${p.to}`} className={`pillar pillar-${p.cor}`}>
              <span className="pillar-icon"><Icon name={p.icon} size={26} /></span>
              <h2>{p.titulo}</h2>
              <p>{p.texto}</p>
              <span className="pillar-go">Abrir <Icon name="arrow" size={16} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Por onde começar</h2>
          <p>Três passos pequenos</p>
        </div>
        <ol className="steps">
          <li><strong>Caminhe 20 minutos.</strong> Em passo leve, de preferência de manhã cedo ou no fim da tarde.</li>
          <li><strong>Encha uma garrafa de água</strong> e leve com você. Vá bebendo ao longo do dia.</li>
          <li><strong>Troque um ultraprocessado</strong> por comida de verdade. Por exemplo, o salgadinho por milho cozido.</li>
        </ol>
      </section>
    </>
  )
}
