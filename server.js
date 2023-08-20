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
const Shoppingcart = require("./models/models.js")
const shoppingListRoutes = require("./controllers/Routes.js")


///////////////////////////////////////////////////////////////////////////DATABASE CONNECTION
mongoose.connect(URL)
// Connection Event:
    mongoose.connection.on("open", ()=>{console.log("Connected to mongoose")})
                        .on("close", ()=>{console.log("NOT Connected to mongoose")})
                        .on("error", (error)=>{console.log(error)})

///////////////////////////////////////////////////////////////////////////MIDDLEWARE
// CORS: CROSS-ORIGIN RESOURCE SHARING:
app.use(cors())
// USE morgan:
app.use(morgan("dev"))
// express functionality to recognize incoming request object as JSON object:
app.use(express.json())

// ALl the Routes:
app.use("/", shoppingListRoutes)


///////////////////////////////////////////////////////////////////////////SERVER PORT LISTENER
app.listen(PORT)
