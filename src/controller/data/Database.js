/*
const database = () => {

    let products = [
        {"name" : "product1", "description" : "some description1", "price" : 1000},
        {"name" : "product2", "description" : "some description2", "price" : 2000},
        {"name" : "product3", "description" : "some description3", "price" : 3000},
        {"name" : "product4", "description" : "some description4", "price" : 4000},
        {"name" : "product5", "description" : "some description5", "price" : 5000},
    ]

    return {
        getList : function(){
            return products;
        }
    }
}

module.exports = database*/

class Database{
    constructor(){
        if(!Database.instance){
            this._products = [
                {
                    "name" : "product1",
                    "description" : "some description1",
                    "price" : 1000
                },
                {"name" : "product2", "description" : "some description2", "price" : 2000},
                {"name" : "product3", "description" : "some description3", "price" : 3000},
                {"name" : "product4", "description" : "some description4", "price" : 4000},
                {"name" : "product5", "description" : "some description5", "price" : 5000},
            ];


            Database.instance = this;
        }
        return Database.instance;
    }

    getList(){
        return this._products;
    }
}
const instance = new Database();
Object.freeze(instance);
module.exports = instance;



