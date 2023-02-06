interface Car {
  brand: string;
  color: string;
  doors: number;
  honk(): string;
  turnOn(): string;
  turnOff(): string;
  speedUp(speed: number): string;
  speedDown(speed: number): string;
  stop(): string;
  turn(direction: string): string;
}

class Car{
  constructor(brand: string, color: string, doors: number){
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  honk(){
    return 'FOMMMMMM';
  }
  turnOn(){
    return 'Carro ligado';
  }
  turnOff(){
    return 'Carro desligado';
  }
  speedUp(speed: number){
    return `O carro foi acelerado em ${speed}km/h`
  }
  speedDown(speed: number){
    return `O carro foi desacelerado em ${speed}km/h`
  }
  stop(){
    return 'Carro parado';
  }
  turn(direction: string){
    return `Vire à ${direction}`
  }
}

// const Maserati = new Car('Maserati', 'Dark blue', 2);

// console.log(Maserati.speedUp(122))
// console.log(Maserati.turn('esquerda'))

const Gol = new Car('Volkswagen', 'prata', 4);

const emFrente= (quilometragem?: string) => {
  if (quilometragem) {
    console.log(`Siga em frente ${quilometragem}`)
  } else {
    console.log('Siga em frente')
  }
}

emFrente();
console.log(Gol.turn('esquerda daqui a 600 metros'));
console.log(Gol.turn('direita na segunda saída da rotatória daqui a 200m'));
emFrente('1,2 quilômetros');
console.log(Gol.turn('direita daqui a 300 metros'));
emFrente('400 metros');
console.log(Gol.stop());
console.log('Você chegou ao seu destino');
console.log('--------------------------');
console.log('Sobe outro passageiro');
emFrente();
console.log(Gol.turn('direita daqui a 300 metros'));
emFrente('2 quilômetros');
console.log(Gol.turn('esquerda daqui a 200 metros'));
console.log(Gol.turn('direita daqui a 400 metros'));
emFrente('100 metros');
console.log(Gol.stop());
console.log('Você chegou ao seu destino');
