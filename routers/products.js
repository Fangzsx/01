const express = require('express');
const router = express.Router();
const getProducts = require('../src/controller/database/getProducts');

router.use(express.json());


router.get('/' , (req, res) => {
    res.send(getProducts())
})

module.exports = router

