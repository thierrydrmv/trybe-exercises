// const testingScope = (escopo) => (escopo === true) ? console.log(`Não devo ser utilizada fora do meu escopo (if) 
// ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo (else)`);
    
const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(true);
  testingScope(false);