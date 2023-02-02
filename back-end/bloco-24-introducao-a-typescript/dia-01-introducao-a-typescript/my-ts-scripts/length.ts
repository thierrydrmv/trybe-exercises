import convert from './convert'

  const values: Values[] = [
    { nome: 'Quilômetro', simbolo:'km',	valor: 1000},
    { nome: 'Hectômetro', simbolo:'hm',	valor: 100},
    { nome: 'Decâmetro', simbolo:'dam',	valor: 10},
    { nome: 'Metro', simbolo:'m',	valor: 1},
    { nome: 'Decímetro', simbolo:'dm',	valor: 0.1},
    { nome: 'Centímetro', simbolo:'cm',	valor: 0.01},
    { nome: 'Milímetro', simbolo:'mm',	valor: 0.001},
  ]

interface Values {
  nome: string
  simbolo: string,
  valor: number
}

console.log(convert(22, 'm', 'cm', values))