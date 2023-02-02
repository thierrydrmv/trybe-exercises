import convert from './convert'

const area: Area[] = [
  { nome: 'Quilômetro quadrado', simbolo:'km²',	valor: 1000000},
  { nome: 'Hectômetro quadrado', simbolo:'hm²',	valor: 10000},
  { nome: 'Decâmetro quadrado	', simbolo:'dam²',	valor: 100},
  { nome: 'Metro quadrado', simbolo:'m²',	valor: 1},
  { nome: 'Decímetro quadrado', simbolo:'dm²',	valor: 0.01},
  { nome: 'Centímetro quadrado', simbolo:'cm²',	valor: 0.0001},
  { nome: 'Milímetro quadrado', simbolo:'mm²',	valor: 0.000001},
]

interface Area {
  nome: string
  simbolo: string,
  valor: number
}

console.log(convert(1002, 'm²', 'km²', area))

