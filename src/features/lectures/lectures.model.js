const mongoose = require("mongoose");

const lecturesSchema = new mongoose.Schema({
    lectureName: {type: String, required: true},
    lectureDesc: {type: String, required: true},
    lectureStarttime: {type: String, required: true},
    lectureEndtime: {type: String, required: true},
    tutorId: {type: mongoose.Schema.Types.ObjectId, ref: "tutor"},
    courseId: {type: mongoose.Schema.Types.ObjectId, ref: ""},
   
  
});

const course = mongoose.model("course",lecturesSchema);

module.exports = course;
