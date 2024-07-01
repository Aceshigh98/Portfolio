
import cors from 'cors';
import express from 'express';

import mailRouter from './routes/mail';

const app = express();

app.use(cors());

app.use("/contact", mailRouter);


app.listen(3000, () => {
  console.log('Server started on http://localhost:9000');
});