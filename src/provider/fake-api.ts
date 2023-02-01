import tradicional from './coffeesImage/Expresso-tradicional.svg'
import americano from './coffeesImage/Americano.svg'
import cremoso from './coffeesImage/Expresso-cremoso.svg'
import gelado from './coffeesImage/Café-Gelado.svg'
import cafeComLeite from './coffeesImage/Café-com-Leite.svg'
import latte from './coffeesImage/Latte.svg'
import capuccino from './coffeesImage/Capuccino.svg'
import macchiato from './coffeesImage/Macchiato.svg'
import mocaccino from './coffeesImage/mocaccino.svg'
import chocolateQuente from './coffeesImage/chocolate-quente.svg'
import cubano from './coffeesImage/cubano.svg'
import havaiano from './coffeesImage/havaiano.svg'
import arabe from './coffeesImage/arabe.svg'
import irlandes from './coffeesImage/irlandes.svg'

export type Data = {
  title: string
  description: string
  types: string[]
  img: string
  id: number
  price: number
  amount: number
}

export const data: Data[] = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    types: ['tradicional'],
    img: tradicional,
    price: 5.9,
    amount: 0,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    types: ['tradicional'],
    img: americano,
    price: 9.9,
    amount: 0,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    types: ['tradicional'],
    img: cremoso,
    price: 10.5,
    amount: 0,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    types: ['tradicional', 'gelado'],
    img: gelado,
    price: 9.9,
    amount: 0,
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    types: ['tradicional', 'com leite'],
    img: cafeComLeite,
    price: 10.0,
    amount: 0,
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    types: ['tradicional', 'com leite'],
    img: latte,
    price: 12.5,
    amount: 0,
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    types: ['tradicional', 'com leite'],
    img: capuccino,
    price: 12.0,
    amount: 0,
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    types: ['tradicional', 'com leite'],
    img: macchiato,
    price: 15.0,
    amount: 0,
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    types: ['tradicional', 'com leite'],
    img: mocaccino,
    price: 12.5,
    amount: 0,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    types: ['especial', 'com leite'],
    img: chocolateQuente,
    price: 10.0,
    amount: 0,
  },
  {
    id: 11,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    types: ['especial', 'alcoólico', 'gelado'],
    img: cubano,
    price: 15.5,
    amount: 0,
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    types: ['especial'],
    img: havaiano,
    price: 12.5,
    amount: 0,
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    types: ['especial'],
    img: arabe,
    price: 13.5,
    amount: 0,
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    types: ['especial', 'alcoólico'],
    img: irlandes,
    price: 18.0,
    amount: 0,
  },
]
