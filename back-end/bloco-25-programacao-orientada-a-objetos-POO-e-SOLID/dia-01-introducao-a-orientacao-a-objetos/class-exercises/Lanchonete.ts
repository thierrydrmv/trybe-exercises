class Cliente {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}

class Alimento {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }
  get name(){
    return this._name;
  }
  set name(value: string){
    this._name = value;
  }
  get price(){
    return this._price;
  }
  set price(value: number){
    if (value < 0) throw new Error('Valor precisa ser positivo');
    this._price = value;
  }
}

class Pedido {
  private _cliente: Cliente;
  private _item: Alimento[];
  private _pagamento: string;
  private _desconto?: number;

  constructor(cliente: Cliente, item: Alimento[], pagamento: string){
    this._cliente = cliente;
    this._item = item;
    this._pagamento = pagamento;
  }

  get cliente(): Cliente{
    return this._cliente;
  }
  set cliente(value: Cliente){
    this._cliente = value;
  }
  get item(): Alimento[]{
    return this._item;
  }
  set item(value: Alimento[]){
    this._item = value;
  }
  get pagamento(): string {
    return this._pagamento;
  }
  set pagamento(value: string) {
    this._pagamento = value;
  }
  get desconto(): number | undefined{
    return this._desconto;
  }
  set desconto(value: number | undefined){
    this._desconto = value;
  }

  total() {
    return this._item.reduce((a, c)=> a + c.price, 0)
  }
  totalComDesconto(){
    return this.total()*(this._desconto ? 1 - this._desconto : 1)
  }
}

const cliente = new Cliente('Roberto');

const alimento = new Alimento('Coxinha', 4);
const bebida = new Alimento('Coca geladinha', 5);
const doce = new Alimento('Bombom', 3);

const pedido = new Pedido(cliente, [alimento, bebida, doce], 'dinheiro');
pedido.desconto = 0.3

console.log(pedido.total());
console.log(pedido.totalComDesconto());

