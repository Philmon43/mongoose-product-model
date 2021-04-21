require("./db/mongoose")
const express = require("express")
const PORT = process.env.PORT || 3000
const productRouter = require("./router/product-router")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(productRouter)

app.listen(PORT, () => {
    console.log('Server is up on port 3000.')
})
