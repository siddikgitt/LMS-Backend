const mongoose = require("mongoose");


const assignmentSchema = new mongoose.Schema({
    assignmentType: {type: String, required: true},
    assignmentName: {type: String, required: true},
    assignmentDesc: {type: String, required: true},
    assignmentStartDate: {type: Date, required: true},
    assignmentEndDate: {type: Date, required: true},
    tutorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tutor"
    },
    assignmentTotalMarks: {type: Number, required: true}
}, {timestamps: true});

const assignmentModel = mongoose.model("assignment", assignmentSchema);

module.exports = assignmentModel;