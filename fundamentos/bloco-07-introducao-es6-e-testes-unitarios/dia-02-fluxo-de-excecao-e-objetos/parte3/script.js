const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const adicionaTurno = (objeto, chave, valor) => objeto[chave] = valor;


adicionaTurno(lesson2, 'turno', 'noite');
// console.log(lesson2)

const keys = (objeto) => Object.keys(objeto)


// console.log(keys(lesson2));

const sizeObject = (objeto) => Object.entries(objeto).length

// console.log(sizeObject(lesson2));

const value = (objeto) => Object.values(objeto)

// console.log(value(lesson2))
let allLessons = {};
const block = Object.assign({}, lesson1, lesson2, lesson3)

console.log(block)