const express = require("express");

const student= require("./student.model");
const studentRouter = express.Router();


studentRouter.post("/",async(req,res)=>{
    let {email,password,first_name,last_name,mob_no,course_id} = req.body;
    try{
        let studentData = await student.create({email,password,first_name,last_name,mob_no,course_id})
        return res.status(200).send({data: studentData})
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})


studentRouter.get("/", async(req,res)=>{
    try {
        let data = await student.find().populate("courseId")
        return res.status(200).send({data: data,message:"data fetched successfully"})
    } catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports=studentRouter;