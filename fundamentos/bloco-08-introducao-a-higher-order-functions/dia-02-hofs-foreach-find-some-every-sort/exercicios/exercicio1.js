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
  
  function authorBornIn1947(array, ano) {
    const livroEncontrado = array.find(element => element.author.birthYear === ano);
    return livroEncontrado.author.name
}
  

  // console.log(authorBornIn1947(books, 1947))

  const smallerName = (array) => {
    let nameBook;
    let arrayLivros = array[0].name
    array.forEach((book) => {
      if (arrayLivros.length > book.name.length) {
        arrayLivros = book.name;
      }
    })
    nameBook = arrayLivros;
    return nameBook;
  }

  // console.log(smallerName(books));

  const getNamedBook = (array) => {
    let livro;
    array.find((elemento) => {
    if (elemento.name.length === 26) {
      livro = elemento.name;
    };
  })
  return livro;
}
  // console.log(getNamedBook(books));

  const booksOrderedByReleaseYearDesc = (array) => {
    array.sort((a, b) => b.releaseYear - a.releaseYear)
    return array;
  }

  // console.log(booksOrderedByReleaseYearDesc(books));

  const everyoneWasBornOnSecXX = (array) => array.every(element => element.author.birthYear > 1900)
  
  // console.log(everyoneWasBornOnSecXX(books));

  const someBookWasReleaseOnThe80s = (array) => array.some((element) => element.releaseYear > 1980 && element.releaseYear < 1990);
  
  // console.log(someBookWasReleaseOnThe80s(books));


  // 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

  const authorUnique = (array) =>
  array.map((element) => element.author.birthYear)
  .every((birthYear, index) => !birth
    .some((yearSome, indexSome) => yearSome === birthYear && index !== indexSome));
    // let birth = array.map((element) => element.author.birthYear)
    // return birth.every((year, index) => !birth.some((yearSome, indexSome) => yearSome === year && index !== indexSome));
  //  birth.every(({author: {birthYear}}, index) => !birth.some(({author: {birthYear : yearSome}}, indexSome) => yearSome === birthYear && index !== indexSome));;

  console.log(authorUnique(books));