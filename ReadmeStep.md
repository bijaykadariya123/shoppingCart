# STEPS:
# Files and Dependencies
1. touch server.js .env .gitignore:
2. npm install cors dotenv express mongoose morgan

## Server.js: Initial Setup 1:
**Import Dependencies**
#### Importing .env file & processing PORT and Database URL
1. require("dotenv").config()
2. const {PORT, URL} = process.env

#### Importing Express and creating an app Object
1. const express = require("express")
2. const app= express()
#### Importing mongoose and connecting mongoose to Database
1. const mongooose=require("mongoose")
2. mongoose.connect(URL)
### Initial setup for Routes & Listening to PORT:
1. app.get("/", (req, res)=>{res.json({Hellow: "world"})}) // This is routes
2. app.listen(PORT, ()=>{console.log(`listenting to port ${PORT}`)}) // Listening to the PORT
## Server.js: Initial Setup 1 Ends:
 ### Step completed:
 1. Importing dependencies like dotenv, express, mongoose
 2. Processing .env file which has PORT number and Database URL
 3. Connection to Database (mongoose.connect(URL))
 4. setting up test Routes to confirm if everything is working
 5. Listening to PORT: 

 ## Server.js: SETUP 2:
 ### Server.js Continue:
 **Import Dependencies**
 1. Import cors: const cors = require("cors")
 2. Import morgan: const morgan = require("morgan")

 # CREATE A MODEL & DATABASE SCHEMA:
 **Create a Schema**
 1. const shoppingListSchema = new mongoose.Schema({
    product:String,
    image:String,
    originCountry:String,
    price:Number,
})
-------------------------------------
 **Create a Model**
  1.  const Shoppingcart = mongoose.model("Shoppinglist", shoppingListSchema)
 
 -------------------------------------
 # MiddleWare:
 **USE CORS**

 1. app.use(cors())

 **USE Morgan**

 2. app.use(morgan("dev))

 **USE express Functionality to recognize incoming request object as JSON objects**

 3. app.use(express.json())
## ================================================================================================================
## STEPS COMPLETED SETUP1 and SETUP2 COMPLETED :
1. Importing dependencies like dotenv, express, mongoose, cors, morgan
 2. Processing .env file which has PORT number and Database URL
 3. Connection to Database (mongoose.connect(URL))
 4. Created a Model and Database Connection
 5. used all the middleware such as cors morgan and express.json
 6. setting up test Routes to confirm if everything is  working
 7. Listening to PORT: 
## ================================================================================================================

# ROUTES:
1. ### ROUTES I- Index- get ("/")
  app.get("/", async(req, res)=>{
    const allList = await Shoppingcart.find({})
    res.json(allList)
  })

2. ### ROUTES N- Create- post ("/")
    app.post("/", async (req, res)=>{
        const oneList = await Shoppingcare.create(req.body)
        res.json(oneList)
    })

3. ### ROUTES S- Show- get ("/:id")
    app.get("/:id", async(req, res)=>{
        const iditem = req.params.id
        const oneList = await Shoppingcart.findById(iditem)
        res.json(oneList)
    })

4. ### ROUTES U- Update- put ("/:id")
5. ### ROUTES D- Destroy- delete ("/:id")



