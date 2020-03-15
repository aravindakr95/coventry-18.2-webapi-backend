import express from 'express';
import bodyParser from 'body-parser';

import config from './config/config';

import database from './helpers/database';

import authenticateJWT from './middlewares/auth';

import authRouter from './routes/auth';
import productRouter from './routes/product';
import apiDocsRouter from './routes/api-docs';

const app = express();

app.use(bodyParser.json());

database();

app.use('/api/v1/product', authenticateJWT, productRouter);
app.use('/api/v1/auth', authRouter);
app.use('/', apiDocsRouter);

app.listen(config.apiPort, () => console.log(`Listening on port ${config.apiPort}`));
