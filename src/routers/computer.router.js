const express=require("express")
const router=new express.Router()
const Computer=require("../models/computer.model")
const sequelize=require("sequelize")

router.post("/new", async (req,res)=>{
    try{
        const computer=await Computer.create(req.body)
        res.send(computer)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
router.get("/get", async (req,res)=>{
    const {manufacturer,memory}=req.query
    const minPrice=req.query.minPrice*1
    const maxPrice=req.query.maxPrice*1
    const filter={}
    if (minPrice||maxPrice){
        filter.price={
            [sequelize.Op.between]:[(minPrice?minPrice:0),(maxPrice?maxPrice:Infinity)]
        }
    }
    if (manufacturer){
        filter.manufacturer={
            [sequelize.Op.like]:"%"+manufacturer+"%"
        }
    }
    if (memory){
        filter.memory={
            [sequelize.Op.eq]:memory
        }
    }
    try{
        const computers=await Computer.findAll({
            where:filter
        })
        res.send(computers) 
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }

})

module.exports=router;