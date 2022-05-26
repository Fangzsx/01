const instance = require('../data/Database');

function addProduct(req){
    const {authorization} = req.headers;
    const authKey = '123';
    const db = instance.getList()

    const product = req.body

    return new Promise((resolve, reject) => {
        if(authorization && authorization === authKey){
            db.push(product);
            resolve(product);
        }else{
            reject('invalid key');
        }
    });
}

module.exports = addProduct