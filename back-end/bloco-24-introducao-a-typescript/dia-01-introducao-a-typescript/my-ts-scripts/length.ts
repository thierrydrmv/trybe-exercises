const convert = (valor: number, unidade: string, conversao: string): number => {
  const values: Values[] = [
    { nome: 'Quilômetro', simbolo:'km',	valor: 1000},
    { nome: 'Hectômetro', simbolo:'hm',	valor: 100},
    { nome: 'Decâmetro', simbolo:'dam',	valor: 10},
    { nome: 'Metro', simbolo:'m',	valor: 1},
    { nome: 'Decímetro', simbolo:'dm',	valor: 0.1},
    { nome: 'Centímetro', simbolo:'cm',	valor: 0.01},
    { nome: 'Milímetro', simbolo:'mm',	valor: 0.001},
  ]
  const simbolos = values.map((e) => e.simbolo);
    const valorUnidadeRecebida = simbolos.indexOf(unidade);
    const valorConversao = simbolos.indexOf(conversao);

  return valor * (values[valorUnidadeRecebida].valor / values[valorConversao].valor);
}

interface Values {
  nome: string
  simbolo: string,
  valor: number
}