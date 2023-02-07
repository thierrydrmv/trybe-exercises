import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import BookService from '../services/books.service';

class BooksController {
  constructor(private bookService = new BookService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    return res.status(statusCodes.OK).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const book = await this.bookService.getById(Number(req.params.id))

    if (!book) return res.status(statusCodes.NOT_FOUND).json({ message: 'Book not found!' })
    return res.status(statusCodes.OK).json(book);
  }

  public newBook = async (req: Request, res: Response) => {
    const book = await this.bookService.newBook(req.body);
    return res.status(statusCodes.CREATED).json(book);
  }

  public update = async (req: Request, res: Response) => {
    await this.bookService.update(Number(req.params.id), req.body);
    return res.status(statusCodes.NO_CONTENT).end();
  }

  public delete = async (req: Request, res: Response) => {
    await this.bookService.remove(Number(req.params.id));

    return res.status(statusCodes.NO_CONTENT).end();
  }
}

export default BooksController;