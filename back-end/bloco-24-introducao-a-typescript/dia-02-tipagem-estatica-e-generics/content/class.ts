interface Cachorro {
  nome: string;
  age: number;
  correu(km: number): string;
}

class Cachorro {
  constructor(nome: string, age: number){
    this.nome = nome;
    this.age = age;
  }
  correu(km: number){
    return `O ${this.nome} correu ontem ${km} quilometros`
  }
}

const Cachorro1 = new Cachorro('Galileu', 12)

console.log(Cachorro1.correu(2));

interface Casa {
  tamanho: string;
  quartos: number;
  vagasDeGaragem: number;
  banheiros: number;
  endereco: string;
  visita(data: Date): string;
}

class Casa {
  constructor(tamanho: string, quartos: number, vagasDeGaragem: number, banheiros: number, endereco: string){
    this.tamanho = tamanho;
    this.quartos = quartos;
    this.vagasDeGaragem = vagasDeGaragem;
    this.banheiros = banheiros;
    this.endereco = endereco;
  }
  visita(data: Date){
    return `A visita será no endereco: ${this.endereco} às ${data}`
  }
}

const Casa1 = new Casa('120m2', 3, 2, 3, 'Rua do pão')

console.log(Casa1.visita(new Date("2023-02-17T03:24:00")));

interface Voo {
  numeroDePassageiros: number;
  origem: string;
  destino: string;
  data: Date;
  portao: string;
  mensagem(passageiro: string): string;
}

class Voo {
  constructor(numeroDePassageiros: number, origem: string, destino: string, data: Date, portao: string){
    this.numeroDePassageiros = numeroDePassageiros;
    this.origem = origem;
    this.destino = destino;
    this.data = data;
    this.portao = portao;
  }
  mensagem(passageiro: string){
    return `${passageiro} embarque do voo cu12sp23a com destino ${this.destino} no portão ${this.portao}`
  }
}

const Voo1 = new Voo(80, 'Curitiba', 'São Paulo', new Date("2023-02-17T03:24:00"), '23a')

console.log(Voo1.mensagem('Ruan'))