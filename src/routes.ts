import { Router } from 'express';

import BookController from './controllers/BookControllers';

const routes = Router();

routes.get('/books', BookController.index);
routes.post('/books', BookController.store);
routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.delete);

export default routes;
