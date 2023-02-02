"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("./convert"));
const values = [
    { nome: 'Quilômetro', simbolo: 'km', valor: 1000 },
    { nome: 'Hectômetro', simbolo: 'hm', valor: 100 },
    { nome: 'Decâmetro', simbolo: 'dam', valor: 10 },
    { nome: 'Metro', simbolo: 'm', valor: 1 },
    { nome: 'Decímetro', simbolo: 'dm', valor: 0.1 },
    { nome: 'Centímetro', simbolo: 'cm', valor: 0.01 },
    { nome: 'Milímetro', simbolo: 'mm', valor: 0.001 },
];
console.log((0, convert_1.default)(22, 'm', 'cm', values));
