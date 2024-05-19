import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

export const taskModel = mongoose.model("Task", taskSchema);
