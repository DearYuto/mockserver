import { Request, Response } from 'express';
import GenreService from '../services/GenreService';

const genreService = new GenreService();

export const getGenres = (req: Request, res: Response) => {
  const genres = genreService.getGenres();

  res.json(genres);
};
