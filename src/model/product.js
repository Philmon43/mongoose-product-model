require("../db/mongoose");
const mongoose = require("mongoose");

const productDetailSchema = mongoose.Schema({
    description: {
        type: String,
        // required: true,
    },
    price: {
        type: Number,
        // required: true,
    },
    discount: {
        type: Number,
        // required: true,
    },
    images: [{
        // type: String,
    }],
    phoneNumber: {
        type: Number,
        // required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    detail: productDetailSchema,
})
const Product = mongoose.model("Product", productSchema)
module.exports = Product