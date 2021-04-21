const Product = require("./model/product");

const product = new Product({
    name: "iphone max",
    category: "electronics",
    detail: {
        description: "The phone comes with a 6.50-inch touchscreen display with a resolution of 1242x2688 pixels at a pixel density of 458 pixels per inch (ppi). ",
        price: 3000,
        discount: 10,
        phoneNumber: 0525405446,
    }
})

try {
    product.save()
} catch (e) {
    console.log(e)
}