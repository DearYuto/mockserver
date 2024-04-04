import { genreList } from '../models/genre';

class GenreService {
  getGenres() {
    return genreList;
  }
}

export default GenreService;
