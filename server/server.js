const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB =require("./src/config/db");

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }))


app.use("/api/auth",require("./src/routes/auth.routes"));

app.use("/api/tasks",require("./src/routes/task.route"));


app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running on port ${PORT}`
  )
);