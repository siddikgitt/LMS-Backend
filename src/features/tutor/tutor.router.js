const express = require("express");
const tutor = require("./tutor.model");

const tutorRouter = express.Router();

tutorRouter.post("/add_tutor", async(req, res) => {
    const {tutorEmail, tutorPassword, courseID, batchName} = req.body;
    try{
        const addTutor = await tutor.create({tutorEmail, tutorPassword, courseID, batchName});
        if(addTutor){
            return res.status(200).send({message: "Data Added Successfully", data: addTutor});
        }        
    }
    catch(err){
        return res.send({error: err.message});
    }
});

tutorRouter.get("/getAllTutor", async (req, res) => {
    try{
        const tutorData = await tutor.find();
        return res.status(200).send({message: "Data fetched Successfully", data: tutorData})
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

tutorRouter.get("/get_tutor_by_id/:id", async(req, res) => {
    const {tutorId} = req.params.id;
    try{
        const tutorData = await tutor.findById({_id: id});
        if(tutorData){
            return res.status(200).send({message: "Data fetched Successfully", data: tutorData})
        }
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
})

module.exports = tutorRouter;

