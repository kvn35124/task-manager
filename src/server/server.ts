import * as express from 'express';
import apiRouter from './routes/index';
import * as path from 'path';
import * as bodyParser from 'body-parser';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(apiRouter);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
