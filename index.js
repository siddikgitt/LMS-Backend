const express = require("express");
const dbConnect = require("./src/config/db");
const cors = require("cors");

//Routers
const userRouter = require("./src/features/user/user.router");
const superAdminRouter = require("./src/features/superAdmin/superAdmin.router");
const courseCoordRouter = require("./src/features/courseCoord/courseCoord.router");
const courseRouter = require("./src/features/courses/courses.router");
const studentRouter = require("./src/features/student/student.router");
const lectureRouter = require("./src/features/lectures/lectures.router");
const assignmentRouter = require("./src/features/assignment/assignment.router");

const app = express();
app.use(cors());
app.use(express.json());
//check
app.get("/", (req, res) => {
    res.send("Hi Fynd Academy")
})

//signup
app.use("/users", userRouter);
//superAdmin 
app.use("/superAdmin",superAdminRouter);
//courseCoord
app.use("/courseCoord",courseCoordRouter);
//course
app.use("/course",courseRouter);
//student
app.use("/student",studentRouter);

// lecture
app.use("/lecture", lectureRouter);

//assignment 
app.use("/assignment",assignmentRouter);

let PORT = 8080;
app.listen(PORT, async() => {
    await dbConnect()
    console.log(`Listening to http://localhost:${PORT}`);

})