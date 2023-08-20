///////////////////////////////////////////////////////////////////////////DEPENDENCIES
require("dotenv").config()
const {PORT, URL} = process.env
//Importing Express and creating an Object
const express = require("express")
const app = express()
//Importing mongoose
const mongoose = require("mongoose")
// Import CORS for Cross Origin Resource Sharing:
const cors = require("cors")
// Import morgan for moggan logs
const morgan = require("morgan")


///////////////////////////////////////////////////////////////////////////DATABASE CONNECTION
mongoose.connect(URL)
// Connection Event:
    mongoose.connection.on("open", ()=>{console.log("Connected to mongoose")})
                        .on("close", ()=>{console.log("NOT Connected to mongoose")})
                        .on("error", (error)=>{console.log(error)})

///////////////////////////////////////////////////////////////////////////MODELS
const shoppingListSchema = new mongoose.Schema({
    product:String,
    image:String,
    originCountry:String,
    price:Number,
})
const Shoppingcart = mongoose.model("Shoppinglist", shoppingListSchema)

///////////////////////////////////////////////////////////////////////////MIDDLEWARE
// CORS: CROSS-ORIGIN RESOURCE SHARING:
app.use(cors())
// USE morgina:
app.use(morgan("dev"))
// express functionality to recognize incoming request object as JSON object:
app.use(express.json())
///////////////////////////////////////////////////////////////////////////ROUTES
// app.get("/", (req, res)=>{
//     res.json({Hellow: "world"});
// })

// INDEX: get: "/"
app.get("/", async(req,res)=>{
    try{
        const allList = await Shoppingcart.find({})
        res.json(allList)
    }
    catch(error){
        res.status(400).json(error)
    }
})
// Create Route: POST: "/"
app.post("/", async(req, res)=>{
    try{
        const oneList = await Shoppingcart.create(req.body)
        res.json(oneList)
    }
    catch(error){
        res.status(400).json()
    }
})
// SHOW Route: get: "/:id"
app.get("/:id", async (req, res)=>{
    const idItem = req.params.id
    const oneListItem = await Shoppingcart.findById(idItem)
    res.json(oneListItem)
})



///////////////////////////////////////////////////////////////////////////SERVER PORT LISTENER
app.listen(PORT)
