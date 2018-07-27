const express = require ('express')
const bodyParser = require ('body-parser')
const massive = require ('massive')
require('dotenv').config()
const app = express()

const controller = require ('./controller')

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => {
    console.log('there was an error connecting to db:',err)
})

app.use(bodyParser.json())


app.get('/api/inventory',controller.getInventory)
app.post('/api/product',controller.addProduct)
app.delete('/api/product/:id',controller.deleteProduct)


app.listen(3029, () => {
    console.log('Listening on port 3029')
})