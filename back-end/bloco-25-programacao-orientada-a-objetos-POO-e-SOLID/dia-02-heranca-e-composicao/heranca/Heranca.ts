class SuperClass {
  public isSuper: boolean
  constructor() {
    this.isSuper = true;
  }
  sayhello() : void{
    console.log('Olá mundo!');
  }
} 

class SubClass extends SuperClass {
  constructor(){
    // super é a referência à Superclasse. Ao ser invocado como uma função, está invocando o construtor da superclasse.
    super();
    this.isSuper = false;
  }
  sayhello2(): void{
    this.sayhello;
  }
}
const myFunc = (object: SuperClass) => {
  object.sayhello();
  console.log(object.isSuper? 'Super!' : 'Sub!');
}

const batman = new SuperClass();
const robin = new SubClass();

myFunc(batman);
myFunc(robin);
