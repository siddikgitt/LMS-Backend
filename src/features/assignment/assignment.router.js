const express = require("express")

const assignment = require("./assignment.model")

const assignmentRoute = express.Router();

assignmentRoute.post("/add_assignment",async(req,res)=>{
    let {assignmentType,assignmentName,assignmentDesc,assignmentStartDate,assignmentEndDate} = req.body;
    try{
        let assignmentData = await assignment.create({assignmentType,assignmentName,assignmentDesc,assignmentStartDate,assignmentEndDate})
        return res.status(200).send({data: assignmentData})
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})


assignmentRoute.get("/get_assignment", async(req,res)=>{
    try {
        // .populate("courseId")
        let data = await assignment.find()
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports=assignmentRoute;