const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    cc_id: {type: mongoose.Schema.Types.ObjectId, ref: "coursecoord"},
});

const course = mongoose.model("course", coursesSchema);

module.exports = course;
