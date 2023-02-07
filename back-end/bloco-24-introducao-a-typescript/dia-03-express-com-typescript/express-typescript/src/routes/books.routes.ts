import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);

router.get('/books/:id', booksController.getById);

router.post('/books', booksController.newBook);

router.put('/books/:id', booksController.update);

router.delete('/books/:id', booksController.delete);

export default router;