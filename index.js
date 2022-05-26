const express = require('express');
const app = express();
const port = 3000;

const productsRouter = require('./routers/products');

app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.status(201).send('homepage');
})

const server = app.listen(port, () => {
    console.log(`listening to port ${port}`)
})

module.exports = server;

