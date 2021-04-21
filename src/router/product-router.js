const express = require("express")
const router = new express.Router()
const Product = require("../model/product")


router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.post("/addproduct", async (req, res) => {
    const product = new Product({ ...req.body })
    try {
        await product.save()
        res.send(product)
    } catch (e) {
        console.log(e)
        res.status(401).send(e)
    }
});

router.get("/product/:id", async (req, res) => {
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

router.get("/products/:isactive", async (req, res) => {
    try {
        const product = await Product.find({isActive: req.params.isactive});
        res.send(product)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.get("/products/price-range/:min/:max", async (req, res) => {
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


router.put("/products/:id/:activate", async (req, res) => {
    try {
        const product = await Product.updateOne({ _id: req.params.id }, { isActive: req.params.activate })
        res.send("data modified")
    } catch (e) {
        res.send(500).send(e)
    }
});


router.delete("/products/:id", async (req, res) => {
    try {
        const product = await Product.deleteOne({ _id: req.params.id })
        res.send(product)
    } catch (e) {
        res.send(e)
    }
});


router.delete("/products/delete/all", async (req, res) => {
    try {
        await Product.deleteMany();
        res.send('All Data successfully deleted');
    } catch (e) {
        res.send(e)
    }
});

module.exports = router;