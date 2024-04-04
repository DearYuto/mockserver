import express from 'express';
import dotenv from 'dotenv';

import genreRoutes from './routes/genreRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(genreRoutes);

app.listen(PORT, () => {
  console.log(`======= ${PORT}번 port에서 서버 실행중 =======`);
});
