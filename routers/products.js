const express = require('express');
const router = express.Router();
const getProducts = require('../src/controller/database/getProducts');
const addProduct = require('../src/controller/database/addProduct');

router.use(express.json());


router.get('/' , (req, res) => {
    getProducts()
        .then((value) => {
        res.send(value);
    })
})

router.post('/', (req, res) => {
    addProduct(req)
        .then((value) => {
            res.send(value);
            getProducts().then((value) => {
                console.log(value);
            })

        })
        .catch((value) => {
            res.status(500).send(value);
        })


})

module.exports = router

