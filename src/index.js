require("./db/mongoose")
const express = require("express")
const Product = require("./model/product")
const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products)
    } catch (e) {
        res.status(500).send(e)
    }
});

app.post("/addproduct", async (req, res) => {
    const product = new Product({ ...req.body })
    try {
        await product.save()
        res.send(product)
    } catch (e) {
        console.log(e)
        res.status(401).send(e)
    }
});

app.get("/product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.send(product)
        } else {
            throw("not found")
        }
    } catch (e) {
        res.status(500).send(e)
    }
});

app.get("/products/:isactive", async (req, res) => {
    try {
        const product = await Product.find({isActive: req.params.isactive});
        res.send(product)
    } catch (e) {
        res.status(500).send(e)
    }
});

app.get("/products/price-range/:min/:max", async (req, res) => {
    try {
        const products = (await Product.find()).filter((p) => {
            if (p.details.price >= req.params.min && p.details.price <= req.params.max) {
                return p
            }
        });
        res.send(products)
    } catch (e) {
        res.status(401).send(e)
    }
});

app.listen(PORT, () => {
    console.log('Server is up on port 3000.')
})
