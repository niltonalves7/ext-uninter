# Conect Vida

SPA em React (Vite) para um projeto de extensão: atividades físicas ao ar livre, hidratação e alimentação saudável.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera dist/index.html (arquivo único, pronto para hospedar)
npm run preview  # testa o build localmente
```

## Estrutura

- `src/App.jsx`: layout, navegação (topo no desktop, barra inferior no celular) e rotas por hash (`#treinar`).
- `src/pages/`: Home, Treinar, Hidratar, Comer.
- `src/components/`: ícones, anel de progresso e ilustrações em SVG.
- `src/data.js`: todo o conteúdo (exercícios, cardápios, listas). Edite aqui para mudar textos.
- `src/hooks.js`: roteamento por hash e `useStored` (salva progresso no localStorage).
- `src/styles.css`: tokens de cor, tema claro/escuro automático e estilos.
