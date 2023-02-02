"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("./convert"));
const area = [
    { nome: 'Quilômetro quadrado', simbolo: 'km²', valor: 1000000 },
    { nome: 'Hectômetro quadrado', simbolo: 'hm²', valor: 10000 },
    { nome: 'Decâmetro quadrado	', simbolo: 'dam²', valor: 100 },
    { nome: 'Metro quadrado', simbolo: 'm²', valor: 1 },
    { nome: 'Decímetro quadrado', simbolo: 'dm²', valor: 0.01 },
    { nome: 'Centímetro quadrado', simbolo: 'cm²', valor: 0.0001 },
    { nome: 'Milímetro quadrado', simbolo: 'mm²', valor: 0.000001 },
];
console.log((0, convert_1.default)(1002, 'm²', 'km²', area));
