import express from "express"
const app = express()
require("dotenv").config()
const product = require('./api/product')

const PORT = process.env.PORT || 5000

app.use('/api/product', product)

app.listen(PORT, () => console.log("Listening to Port", PORT))