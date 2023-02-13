interface Logger {
  log(param: string) : void;
}

interface Database {
  logger: Logger;
  save(key: string, value: string) : void
}

class ConsoleLogger implements Logger {
  log(param: string) : void{
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string) : void{
    console.log(`${param}, console2`);
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}
  save(key: string, value: string) {
    this.logger.log(`${key} ${value}`)
  }  
}

const frase = new ConsoleLogger();
const frase2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(frase);
const database2 = new ExampleDatabase(frase2);
const database3 = new ExampleDatabase();

database1.save('Chave 1', 'Chave 1');
database2.save('Chave 2', 'Chave 2');
database3.save('Chave 3', 'Chave 3');
