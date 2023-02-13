class Person{
  constructor(private _name: string, private _birthDate: Date){
    this.name = _name;
    this.birthDate = _birthDate;
  }
  get name(){
    return `O nome dessa pessoa é: ${this._name}`
  }
  set name(newName: string){
    if (newName.length < 3) throw new Error('O nome deve ter 3 caracteres no mínimo.')
    this._name = newName;
  }
  get birthDate(){
    return this._birthDate
  }
  set birthDate(data: Date){
    this.validateBirthDate(data);
    this._birthDate = data;
  }
  // static só existe dentro da classe
  static getAge(value: Date) {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }
  private validateBirthDate(value: Date): void {
    // getTime retorna a data em milissegundos
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser no futuro.');
    if (Person.getAge(value) > 120) throw new Error('A pessoa não pode ter mais que 120 anos');
  }
}

const person1 = new Person('Joao', new Date('1972/01/01'));

console.log(person1)

export default Person;