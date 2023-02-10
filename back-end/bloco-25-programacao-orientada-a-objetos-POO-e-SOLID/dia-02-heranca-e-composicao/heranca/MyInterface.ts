interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {
  }
  myFunc(myParam: number): string {
    return `A soma dos parametros deu: ${myParam + this.myNumber}`
  }
}

const sum = new MyClass(6);

console.log(sum.myFunc(12));