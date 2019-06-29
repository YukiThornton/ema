import express from 'express';
import emasRouter from './routes/emasRouter';
import emaRouter from './routes/emaRouter';
import bodyParser = require('body-parser');
const app = express();
const port = 3000;

if (process.env.NODE_ENV === 'development') {
    app.use(function(_, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}

app.use(bodyParser.json())
app.get('/', (_, res) => res.send('Hello World!'));
app.use('/emas', emasRouter);
app.use('/ema', emaRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

