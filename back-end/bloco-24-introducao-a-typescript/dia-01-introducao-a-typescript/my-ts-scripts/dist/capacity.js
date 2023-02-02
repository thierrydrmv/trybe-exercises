"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("./convert"));
const liquid = [
    { nome: 'Quilolitro', simbolo: 'kl', valor: 1000 },
    { nome: 'Hectolitro', simbolo: 'hl', valor: 100 },
    { nome: 'Decalitro', simbolo: 'dal', valor: 10 },
    { nome: 'Litro', simbolo: 'l', valor: 1 },
    { nome: 'Decilitro', simbolo: 'dl', valor: 0.1 },
    { nome: 'Centilitro', simbolo: 'cl', valor: 0.01 },
    { nome: 'Mililitro', simbolo: 'ml', valor: 0.001 },
];
console.log((0, convert_1.default)(222, 'ml', 'dal', liquid));
