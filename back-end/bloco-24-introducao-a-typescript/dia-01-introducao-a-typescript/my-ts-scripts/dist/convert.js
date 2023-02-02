"use strict";
const convert = (valor, unidade, conversao, values) => {
    const simbolos = values.map((e) => e.simbolo);
    const valorUnidadeRecebida = simbolos.indexOf(unidade);
    const valorConversao = simbolos.indexOf(conversao);
    return valor * (values[valorUnidadeRecebida].valor / values[valorConversao].valor);
};
module.exports = convert;
