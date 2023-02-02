const convert = (valor: number, unidade: string, conversao: string, values: Array<{nome: string, simbolo: string, valor: number}>): number => {
  const simbolos = values.map((e) => e.simbolo);
  const valorUnidadeRecebida = simbolos.indexOf(unidade);
  const valorConversao = simbolos.indexOf(conversao);

return valor * (values[valorUnidadeRecebida].valor / values[valorConversao].valor);
}

export = convert;