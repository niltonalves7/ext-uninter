import { useRoute } from './hooks.js'
import { ROTAS } from './data.js'
import { Icon } from './components/ui.jsx'
import Home from './pages/Home.jsx'
import Treinar from './pages/Treinar.jsx'
import Hidratar from './pages/Hidratar.jsx'
import Comer from './pages/Comer.jsx'

const PAGINAS = { inicio: Home, treinar: Treinar, hidratar: Hidratar, comer: Comer }

export default function App() {
  const rota = useRoute(ROTAS.map((r) => r.id))
  const Pagina = PAGINAS[rota]

  return (
    <>
      <header className="site-header">
        <div className="container bar">
          <a className="brand" href="#inicio" aria-label="Mova-se de Graça, ir para o início">
            <span className="brand-mark">
              <Icon name="sun" size={20} />
            </span>
            Connect Vida
          </a>
          <nav className="top-nav" aria-label="Principal">
            {ROTAS.map((r) => (
              <a key={r.id} href={`#${r.id}`} aria-current={rota === r.id ? 'page' : undefined}>
                {r.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main key={rota} className="page">
        <Pagina />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            <strong>Aviso:</strong> conteúdo educativo, feito por estudante. 
            Não substitui consulta com médico, educador físico ou nutricionista.
          </p>
        </div>
      </footer>

      <nav className="tabbar" aria-label="Principal">
        {ROTAS.map((r) => (
          <a key={r.id} href={`#${r.id}`} aria-current={rota === r.id ? 'page' : undefined}>
            <Icon name={r.icon} />
            <span>{r.label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
