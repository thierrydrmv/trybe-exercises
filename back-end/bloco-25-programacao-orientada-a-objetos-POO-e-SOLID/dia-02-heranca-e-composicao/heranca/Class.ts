class Class {
  constructor(private _name: string) {
    this.name = _name;
  }
  get name(){
    return this._name
  }
  set name(newName: string){
    this.validateName(newName);
    this._name = newName;
  }
  validateName(name: string){
    if(name.length < 3) throw new Error('O nome da classe deve ter no mínimo 3 caracteres')
  }
}

const math = new Class('Matemática');
const histories = new Class('História');
const philosophy = new Class('Filosofia');

console.log(math, histories, philosophy);

export default Class;