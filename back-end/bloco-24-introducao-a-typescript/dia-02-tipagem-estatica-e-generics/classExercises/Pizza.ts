type Fatias = 4 | 6 | 8;

interface Pizza{
  sabor: string;
  quantidadeDeFatias: Fatias;
  leiaOPedido(): string;
}

class Pizza{
  constructor(sabor: string, quantidadeDeFatias: Fatias){
    this.sabor = sabor;
    this.quantidadeDeFatias = quantidadeDeFatias;
  }
  leiaOPedido(){
    return `Uma pizza de ${this.sabor} com ${this.quantidadeDeFatias} fatias`
  }
}

export default Pizza;