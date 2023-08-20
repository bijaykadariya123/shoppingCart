const mongoose = require("mongoose")

const shoppingListSchema = new mongoose.Schema({
    product:String,
    image:String,
    originCountry:String,
    price:Number,
})
const Shoppingcart = mongoose.model("Shoppinglist", shoppingListSchema)

module.exports = Shoppingcart