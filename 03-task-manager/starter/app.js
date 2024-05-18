import express from "express";
import dotenv from "dotenv";

const app = express();

//Routes
app.get("/hello", (req, res) => {
  res.send("YOu are at server");
});

const PORT = 3000;

app.listen(PORT, console.log(`Server is listening at PORT : ${PORT}`));
