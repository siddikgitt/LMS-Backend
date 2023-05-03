const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect(`mongodb+srv://siddikkhanpathan4:Ko6NXGlqR52pf3gm@cluster0.wouzott.mongodb.net/test`)
}

// password Ko6NXGlqR52pf3gm

module.exports = connect;