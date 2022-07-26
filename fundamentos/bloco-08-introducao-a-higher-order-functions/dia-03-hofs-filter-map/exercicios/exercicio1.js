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
  
  const formatedBookNames = (array) => array.map(book => `${book.name} - ${book.genre} - ${book.author.name}`);

//   console.log(formatedBookNames(books))

  const nameAndAge = (array) => {
    const newArray = array.map(item => ({
        age: (item.releaseYear - item.author.birthYear),
        author: item.author.name,
    }))
    return newArray.sort((a, b) => a.age - b.age);
  };
//   console.log(nameAndAge(books));

const fantasyOrScienceFiction = (array) => array.filter(book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

// console.log(fantasyOrScienceFiction(books))

const oldBooksOrdered = (array) => {
    const moreThan60 = array.filter(book => 2022 - book.releaseYear > 60);
    moreThan60.sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
    return moreThan60;
}

// console.log(oldBooksOrdered(books));

const fantasyOrScienceFictionAuthors = (array) => {
    let goodBooks = array.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    let goodBooksAuthors = goodBooks.map(array => array.author.name).sort()
    return goodBooksAuthors;
}

// console.log(fantasyOrScienceFictionAuthors(books));

const oldBooks = (array) => {
    const ordem = array.filter(element => 2022 - element.releaseYear > 60);
    const ordemTitle = ordem.map(book => book.name);
    return ordemTitle;
}

// console.log(oldBooks(books));