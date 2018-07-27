const express = require ('express')
const bodyParser = require ('body-parser')
const massive = require ('massive')
require('dotenv').config()

const controller = require ('./controller')

const app = express()

app.use(bodyParser.json())


app.listen(3029, () => {
    console.log('Listening on port 3029')
})