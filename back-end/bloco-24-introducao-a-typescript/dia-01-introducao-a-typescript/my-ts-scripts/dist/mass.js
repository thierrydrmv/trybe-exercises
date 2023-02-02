"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("./convert"));
const objMassa = [
    { nome: 'Quilograma', simbolo: 'kg', valor: 1000 },
    { nome: 'Hectograma', simbolo: 'hg', valor: 100 },
    { nome: 'Decagrama', simbolo: 'dag', valor: 10 },
    { nome: 'Grama', simbolo: 'g', valor: 1 },
    { nome: 'Decigrama', simbolo: 'dg', valor: 0.1 },
    { nome: 'Centigrama', simbolo: 'cg', valor: 0.01 },
    { nome: 'Miligrama', simbolo: 'mg', valor: 0.001 },
];
console.log((0, convert_1.default)(12, 'kg', 'g', objMassa));
