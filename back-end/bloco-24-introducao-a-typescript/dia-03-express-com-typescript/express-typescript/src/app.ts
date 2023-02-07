import express, { Request, Response } from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';
import BooksRoutes from './routes/books.routes';
import validationBook from './middlewares/books.middleware';


const app = express();

app.use(express.json());


app.get('/', (_req: Request, res: Response) => {
    res.status(statusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes);

app.use(validationBook);

export default app;