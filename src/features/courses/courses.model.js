const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    desc: {type: String, required: true},
    courseCoord: {type: mongoose.Schema.Types.ObjectId, ref: coursecoord}
   
  
});

const course = mongoose.model("course", coursesSchema);

module.exports = course;
