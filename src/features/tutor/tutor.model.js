const mongoose = require("mongoose");


const tutorSchema = new mongoose.Schema({
    tutorEmail: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    tutorPassword: {
        type: String,
        required: true
    },
    courseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    },
    batchName: {
        type: [{type: String}]
    }

})

const tutorModel = mongoose.model("tutor", tutorSchema);

module.exports = tutorModel;