"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("./convert"));
const liquid = [
    { nome: 'Quilômetro cúbico', simbolo: 'km³', valor: 1000 },
    { nome: 'Hectômetro cúbico', simbolo: 'hm³', valor: 100 },
    { nome: 'Decâmetro cúbico', simbolo: 'dam³', valor: 10 },
    { nome: 'Metro cúbico', simbolo: 'm³', valor: 1 },
    { nome: 'Decímetro cúbico', simbolo: 'dm³', valor: 0.1 },
    { nome: 'Centímetro cúbico', simbolo: 'cm³', valor: 0.01 },
    { nome: 'Milímetro cúbico', simbolo: 'mm³', valor: 0.001 },
];
console.log((0, convert_1.default)(22222222, 'mm³', 'dam³', liquid));
