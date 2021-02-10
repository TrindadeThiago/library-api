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

    return response.status(201).json(book);
  }

  async update(request: Request, response: Response) {
    const { id } = request.body;

    const book = await Book.findOneAndUpdate(id, request.body);

    if (!book) {
      return response.status(404).json({ message: 'This book does not exist' });
    }

    return response.status(200).json(book);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const book = await Book.findByIdAndRemove(id);

    if (!book) {
      return response.status(404).json({ message: 'This book does not exist' });
    }

    return response.status(204).send();
  }
}

export default new BookController();
