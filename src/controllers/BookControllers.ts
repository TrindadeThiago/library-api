import { Request, Response } from 'express';

import Book from '../models/Book';

class BookController {
  async index(request: Request, response: Response) {
    const books = await Book.find();

    return response.status(200).json(books);
  }

  async store(request: Request, response: Response) {
    const titleExists = await Book.findOne({ title: request.body.title });

    if (titleExists) {
      return response
        .status(400)
        .json({ message: 'This book is already registered ' });
    }

    const book = await Book.create(request.body);

    return response.json(book);
  }
}

export default new BookController();
