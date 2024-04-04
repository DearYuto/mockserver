import { Router } from 'express';
import { getGenres } from '../controllers/GenreController';

const router = Router();

router.get('/genres', getGenres);

export default router;
