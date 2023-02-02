import convert from './convert'

const liquid: Liquid[] = [
  { nome: 'Quilolitro', simbolo:'kl',	valor: 1000},
  { nome: 'Hectolitro', simbolo:'hl',	valor: 100},
  { nome: 'Decalitro', simbolo:'dal',	valor: 10},
  { nome: 'Litro', simbolo:'l',	valor: 1},
  { nome: 'Decilitro', simbolo:'dl',	valor: 0.1},
  { nome: 'Centilitro', simbolo:'cl',	valor: 0.01},
  { nome: 'Mililitro', simbolo:'ml',	valor: 0.001},
]

interface Liquid {
  nome: string
  simbolo: string,
  valor: number
}

console.log(convert(222, 'ml', 'dal', liquid))

