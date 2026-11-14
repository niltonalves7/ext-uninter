export const ROTAS = [
  { id: 'inicio', label: 'Início', icon: 'home' },
  { id: 'treinar', label: 'Treinar', icon: 'pulse' },
  { id: 'hidratar', label: 'Hidratar', icon: 'drop' },
  { id: 'comer', label: 'Comer bem', icon: 'leaf' },
]
export const META_SEMANAL = 150

export const EXERCICIOS = [
  {
    id: 'polichinelo',
    nome: 'Polichinelo',
    grupo: 'Aquecimento',
    dose: '30 segundos',
    dica: 'Pule abrindo braços e pernas ao mesmo tempo. Pouse suave, com os joelhos levemente dobrados.',
    poses: [
      { head: [70, 22], lines: [[70, 34, 70, 66], [70, 66, 66, 98], [70, 66, 74, 98], [70, 40, 56, 64], [70, 40, 84, 64]] },
      { head: [70, 22], lines: [[70, 34, 70, 66], [70, 66, 54, 98], [70, 66, 86, 98], [70, 40, 46, 22], [70, 40, 94, 22]] },
    ],
  },
  {
    id: 'agachamento',
    nome: 'Agachamento',
    grupo: 'Pernas',
    dose: '10 a 15 repetições',
    dica: 'Sente para trás como se fosse sentar num banco. Joelhos na direção dos pés. Use o banco da praça como apoio no começo.',
    poses: [
      { head: [60, 22], lines: [[60, 34, 58, 64], [58, 64, 60, 98], [60, 42, 82, 48]] },
      { head: [56, 40], lines: [[56, 52, 46, 72], [46, 72, 74, 76, 68, 98], [56, 56, 84, 54]] },
    ],
  },
  {
    id: 'flexao',
    nome: 'Flexão inclinada',
    grupo: 'Peito e braços',
    dose: '8 a 12 repetições',
    dica: 'Mãos no banco ou no muro, corpo reto como uma tábua. Quanto mais baixo o apoio, mais difícil.',
    bench: true,
    poses: [
      { head: [106, 40], lines: [[16, 98, 98, 52], [98, 52, 104, 62]] },
      { head: [102, 54], lines: [[16, 98, 92, 64], [92, 64, 86, 56, 104, 62]] },
    ],
  },
  {
    id: 'afundo',
    nome: 'Afundo alternado',
    grupo: 'Pernas',
    dose: '8 por perna',
    dica: 'Dê um passo à frente e desça até o joelho de trás quase tocar o chão. Segure num poste se perder o equilíbrio.',
    poses: [
      { head: [70, 22], lines: [[70, 34, 70, 62], [70, 62, 62, 98], [70, 62, 80, 98], [70, 44, 60, 56]] },
      { head: [66, 34], lines: [[66, 46, 66, 72], [66, 72, 92, 76, 92, 98], [66, 72, 44, 88, 28, 98], [66, 52, 78, 64]] },
    ],
  },
  {
    id: 'prancha',
    nome: 'Prancha',
    grupo: 'Abdômen',
    dose: '20 a 30 segundos',
    dica: 'Antebraços e pontas dos pés no chão, corpo em linha reta. Se pesar, apoie os joelhos.',
    poses: [
      { head: [112, 62], lines: [[18, 92, 98, 72], [98, 72, 98, 92], [98, 92, 114, 92]] },
    ],
  },
]

export const HORARIOS = [
  { de: 5, ate: 9, tipo: 'bom', nome: 'Ideal' },
  { de: 9, ate: 10, tipo: 'ok', nome: 'Com cuidado' },
  { de: 10, ate: 16, tipo: 'ruim', nome: 'Evite' },
  { de: 16, ate: 18, tipo: 'ok', nome: 'Com cuidado' },
  { de: 18, ate: 20, tipo: 'bom', nome: 'Ideal' },
]

export const PRATO = [
  { id: 'veg', nome: 'Legumes e verduras', parte: 'Metade do prato', cor: 'var(--green)', texto: 'Os legumes e as verduras são fundamentais na alimentação porque fornecem nutrientes essenciais que o corpo precisa para funcionar bem, prevenir doenças e manter o equilíbrio. Couve, repolho, cenoura, abóbora, tomate, quiabo.' },
  { id: 'base', nome: 'Arroz e feijão', parte: 'Um quarto do prato', cor: 'var(--sun)', texto: 'A combinação de arroz e feijão serve como base nutricional completa para o organismo, fornecendo energia, proteínas de alto valor biológico, fibras e diversos minerais.' },
  { id: 'prot', nome: 'Proteína', parte: 'Um quarto do prato', cor: 'var(--coral)', texto: 'As proteínas servem como os principais blocos de construção e reguladores do corpo humano, sendo essenciais para a vida e o funcionamento de todas as células.' },
]

export const TROCAS = [
  ['Refrigerante', 'Água com limão'],
  ['Biscoito recheado', 'Banana com aveia'],
  ['Salgadinho de pacote', 'Milho cozido ou pipoca de panela'],
  ['Macarrão instantâneo', 'Macarrão com ovo e legumes'],
  ['Suco de caixinha', 'Fruta inteira ou suco natural'],
]
