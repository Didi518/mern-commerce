const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const errorMiddleware = require('./middlewares/error');

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

const users = require('./routes/userRoutes');
const products = require('./routes/productRoutes');
const orders = require('./routes/orderRoutes');

app.use('/api/v1', users);
app.use('/api/v1', products);
app.use('/api/v1', orders);

app.use(errorMiddleware);

module.exports = app;
