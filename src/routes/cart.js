import express from 'express';

import cartController from '../cart/cart-controller';
import authenticateJWT from '../middlewares/auth';
import { fieldStateChecker, validate } from '../middlewares/field-validator';

const cartRouter = express.Router();

cartRouter.post('/products',
    authenticateJWT,
    validate('cart', '/products', 'post'),
    fieldStateChecker,
    (req, res) => {
        cartController(req, res);
    });

cartRouter.put('/products/:userId',
    authenticateJWT,
    validate('cart', '/products', 'put'),
    fieldStateChecker,
    (req, res) => {
        cartController(req, res);
    });

cartRouter.get('/products/:userId',
    authenticateJWT,
    (req, res) => {
        cartController(req, res);
    });

module.exports = cartRouter;
