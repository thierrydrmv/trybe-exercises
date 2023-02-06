import Author from "./database/models/AuthorModel";
import Book from './database/models/BookModel';
import sequelize from "sequelize";

(async () => {
  const authors = await Author.findAll();
  console.table(authors.map((author) => author.toJSON()));

})();

(async () => {
  const books = await Book.findAll();
  console.table(books.map((book) => book.toJSON()));

})();

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    order: [['name', 'DESC']],
    raw: true,
  });

  console.table(data);
  process.exit(0);
})();