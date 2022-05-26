const express = require('express');
const router = express.Router();

router.use(express.json());


//sample data
const products = [
    {"name" : "product1", "description" : "some description1", "price" : 1000},
    {"name" : "product2", "description" : "some description2", "price" : 2000},
    {"name" : "product3", "description" : "some description3", "price" : 3000},
    {"name" : "product4", "description" : "some description4", "price" : 4000},
    {"name" : "product5", "description" : "some description5", "price" : 5000},
];

router.get('/' , (req, res) => {
    res.status(200).send(products);
})

router.post('/', (req, res) => {
    const VALUE = '123';
    const product = req.body

    const {authorization} = req.headers
    if(authorization && authorization === VALUE){
        products.push(product)
        res.status(201).send(`${product.name} was added!`);
        console.log(products);
    }else{
        res.status(500).send('invalid authorization key');
    }
})

module.exports = router
