const express = require("express");

const course = require("./courses.model");
const courseRouter = express.Router();


courseRouter.post("/",async(req,res)=>{
    let {name,desc,cc_id} = req.body;
    try{
        let courseData = await course.create({name,desc,cc_id})
        return res.status(200).send({data: courseData})
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

courseRouter.get("/", async(req,res)=>{
    try {
        let data = await course.find().populate("cc_id")
        return res.status(200).send({data: data,message:"data fetched successfully"})
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

module.exports = courseRouter;
