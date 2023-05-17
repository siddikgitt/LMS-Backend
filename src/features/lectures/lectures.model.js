const mongoose = require("mongoose");

const lecturesSchema = new mongoose.Schema({
    lectureName: {type: String, required: true},
    lectureStarttime: {type: String, required: true},
    lectureEndtime: {type: String, required: true},
    tutorId: {type: mongoose.Schema.Types.ObjectId, ref: "tutor"},
    courseId: {type: mongoose.Schema.Types.ObjectId, ref: "coursecoord"},
    lectureAgenda: {type: String, required: true},
    lectureDate: {type: Date, required: true}
});

const lecture = mongoose.model("lecture", lecturesSchema);

module.exports = lecture;
