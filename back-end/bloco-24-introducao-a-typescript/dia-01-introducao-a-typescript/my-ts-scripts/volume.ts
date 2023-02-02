import convert from './convert'

const liquid: Liquid[] = [
  { nome: 'Quilômetro cúbico', simbolo:'km³',	valor: 1000},
  { nome: 'Hectômetro cúbico', simbolo:'hm³',	valor: 100},
  { nome: 'Decâmetro cúbico', simbolo:'dam³',	valor: 10},
  { nome: 'Metro cúbico', simbolo:'m³',	valor: 1},
  { nome: 'Decímetro cúbico', simbolo:'dm³',	valor: 0.1},
  { nome: 'Centímetro cúbico', simbolo:'cm³',	valor: 0.01},
  { nome: 'Milímetro cúbico', simbolo:'mm³',	valor: 0.001},
]

interface Liquid {
  nome: string
  simbolo: string,
  valor: number
}

console.log(convert(22222222, 'mm³', 'dam³', liquid))

