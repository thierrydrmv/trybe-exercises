interface Aviao{
  asas: number;
  marca: string;
}

interface Carro{
  rodas: number;
  volante: number;
  marca: string;
}

interface Felino{
  idade: number;
  nome: string;
}

interface Gato extends Felino{
  dono: string;
  dados(): string;
}

const garfild: Gato = {
  idade: 12,
  nome: 'Garfild',
  dono: 'Npc',
  dados(): string {
    return `Meu nome é ${this.dono} o nome do gatinho é ${this.nome}, e ele tem ${this.idade}`
  }
}
console.log(garfild.dados());