import { Router } from 'express';

import BookController from './controllers/BookControllers';

const routes = Router();

routes.get('/books', BookController.index);
routes.post('/books', BookController.store);

export default routes;
