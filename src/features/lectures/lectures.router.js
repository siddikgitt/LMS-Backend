const express = require("express");
const lecture = require("./lectures.model");
const app = express.Router();

app.post("/create-lec", async (req, res) => {
    const {lecName, lecStartTime, lecEndTime, tutorID, courseID, lecAgenda, lecDate} = req.body;
    try{
        const res = await lecture.create(req.body);
        return res.status(200).send(res);
    }
    catch(err){
        return res.status(500).send({error: err.message});
    }
})

app.get("/get-lec", async (req, res) => {
  let {courseID} = req.body;
  try{
      let lec = await coursecoord.find({courseID});
      if(!lec){
        return res.status(404).send("Lectures not available");
      }
      res.send({
        lec: lec
      })
  }
  catch(err){
    return res.status(500).send(err.message);
  }
})

module.exports = app;