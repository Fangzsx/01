const instance = require('../data/Database')

function getProducts(){

    return instance.getList()

}

module.exports = getProducts