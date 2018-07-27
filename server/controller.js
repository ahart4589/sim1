module.exports = {
    getInventory: (req,res) => {
        let db = req.app.get('db')
        db.get_inventory().then(products => {
            // console.log(products)
            res.status(200).send(products)
        })
        
    },
    addProduct: (req,res) => {
        let db = req.app.get('db')
        const {name,price,imgurl} = req.body
        db.create_product([name,price,imgurl]).then(products => {
            res.status(200).send(products)
        })

    },
    deleteProduct: (req,res) => {
        let {id} = req.params
        let db = req.app.get ('db')
        db.delete_product(id).then(products => {
            res.status(200).send(products)
        })
    }

}