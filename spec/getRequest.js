function getProducts(res, list){
    setTimeout(() =>{
        let error = false;
        if(!error){
            res.status(200).send(list);
        }
        else{
            res.status(500).send('error occurred.');
        }
    }, 5000);
}