type Tbird = {
  name: string;
  age: number;
}

const bird: Tbird = {
  name: 'Pingo',
  age: 4,
}

type Tsum = {
  valueA: number;
  valueB: number;
}

function calculator(value: Tsum) {
  console.log(value.valueA + value.valueB)
}

calculator({ valueA:1,valueB:2 });

type TAddress = {
  rua: string;
  number: number,
  bairro: string,
}

const rua: TAddress = {
  rua: 'Francisco Gulin',
  number: 2222,
  bairro: 'santa felicidade'
}