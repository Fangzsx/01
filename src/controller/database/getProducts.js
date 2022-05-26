const instance = require('../data/Database')

function getProducts(){
    console.log('emitting list ...')

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(instance.getList());

        }, 3000);
    })

}

module.exports = getProducts