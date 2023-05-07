const mongoose = require("mongoose");

const courseCoordSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
  
});

const coursecoord = mongoose.model("coursecoord", courseCoordSchema);

module.exports = coursecoord;
