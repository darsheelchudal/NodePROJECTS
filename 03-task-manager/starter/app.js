import express from "express";
import dotenv from "dotenv";
import tasks from "./routes/tasks.js";

const app = express();

//middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("YOu are at server");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;

app.listen(PORT, console.log(`Server is listening at PORT : ${PORT}`));
