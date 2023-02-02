import convert from './convert'

const objMassa: ObjMassa[] = [
  { nome: 'Quilograma', simbolo:'kg',	valor: 1000},
  { nome: 'Hectograma', simbolo:'hg',	valor: 100},
  { nome: 'Decagrama', simbolo:'dag',	valor: 10},
  { nome: 'Grama', simbolo:'g',	valor: 1},
  { nome: 'Decigrama', simbolo:'dg',	valor: 0.1},
  { nome: 'Centigrama', simbolo:'cg',	valor: 0.01},
  { nome: 'Miligrama', simbolo:'mg',	valor: 0.001},
]

interface ObjMassa {
  nome: string
  simbolo: string,
  valor: number
}

console.log(convert(12, 'kg', 'g', objMassa))

