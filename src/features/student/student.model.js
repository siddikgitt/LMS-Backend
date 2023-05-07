const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    mobno: {type: Number, required: true},
    courseId: {type: mongoose.Schema.Types.ObjectId, ref: courses}
  
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
