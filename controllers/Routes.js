const express = require("express")
const ShoppingcartModel = require("../models/models")
const router = express.Router()

// INDEX: get: "/"
router.get("/", async(req,res)=>{
    try{
        const allList = await ShoppingcartModel.find({})
        res.json(allList)
    }
    catch(error){
        res.status(400).json(error)
    }
})
// Create Route: POST: "/"
router.post("/", async(req, res)=>{
    try{
        const oneList = await ShoppingcartModel.create(req.body)
        res.json(oneList)
    }
    catch(error){
        res.status(400).json()
    }
})
// SHOW Route: get: "/:id"
router.get("/:id", async (req, res)=>{
    try{
    const idItem = req.params.id
    const oneListItem = await ShoppingcartModel.findById(idItem)
    res.json(oneListItem)
    }
    catch(error){
        res.status(400).json(error)
    }
})
// Update Route: put: "/: id"
router.put("/:id", async (req, res)=>{
    try{idItem = req.params.id
        const oneListItem = await ShoppingcartModel.findByIdAndUpdate(idItem, req.body, {new:true})
        res.json(oneListItem)
    }
    catch(error){
        res.status(400).json(error)
    }
})
    

// Destroy Route: delete: "/:id"
router.delete("/:id", async (req, res)=>{
    try{
        const idItem = req.params.id
        const oneListItemtoDelete = await ShoppingcartModel.findByIdAndDelete(idItem)
        res.json(oneListItemtoDelete)
    }
    catch(error){
        res.status(400).json()
    }
})

module.exports=router

