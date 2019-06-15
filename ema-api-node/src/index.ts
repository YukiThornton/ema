import express from 'express';
import emasRouter from './routes/emas';
import emaRouter from './routes/ema';
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/emas', emasRouter);
app.use('/ema', emaRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

