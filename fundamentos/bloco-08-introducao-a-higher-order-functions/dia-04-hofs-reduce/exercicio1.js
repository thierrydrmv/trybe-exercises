const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = (arrays) => arrays.reduce((acc, curr) => acc.concat(curr), []);

//   console.log(flatten(arrays));

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
const reduceNames = (array) => array.reduce((unido, atual) => unido.concat(`${atual.author.name}, `), '');
    
// function reduceNames() {
//     const names = books.reduce((acc, book, index, array) => {
//       if (index === array.length - 1) return `${acc} ${book.author.name}.`;
//       return `${acc} ${book.author.name},`;
//     }, '');
//     return names.trim();
//   }

// console.log(reduceNames(books));

const averageAge = (array) => {
    // const idade = array.map((age) => (age.releaseYear - age.author.birthYear))
    return array.reduce((acc, age) => acc + (age.releaseYear - age.author.birthYear), 0)/array.length;
}
// console.log(averageAge(books));

const expectResult = (array) => {
    return array.reduce((livroAcc, livroCurr) => {
        if(livroAcc.name.length>livroCurr.name.length){
            return livroAcc;
        }
        return livroCurr })
}
// console.log(expectResult(books));

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

const containsA = (array) => {
    const lower = array.map(element => element.toLowerCase().split('a').length-1)
    return lower.reduce((total, atual) => total + atual)
}

// console.log(containsA(names));

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (arrayNames, arrayGrades) => {
  const novoObjeto = arrayGrades.map((element, index) => ({
    students: arrayNames[index],
    average : arrayGrades[index].reduce((acc ,curr) => acc + curr , 0)/ element.length
  }))
  return novoObjeto
}
console.log(studentAverage(students, grades));



// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];