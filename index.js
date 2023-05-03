const express = require("express");
const dbConnect = require("./src/config/db");
const cors = require("cors");

//Routers
const userRouter = require("./src/features/user/user.router");

const app = express();
app.use(cors());
app.use(express.json());

//check
app.get("/", (req, res) => {
    res.send("Hi Fynd Academy")
})

//signup
app.use("/users", userRouter);

let PORT = 8080;
app.listen(PORT, async() => {
    await dbConnect()
    console.log(`Listening to http://localhost:${PORT}`);

})