import taskModel from "../models/tasks.js";

//get all tasks
export const getAllTasks = (req, res) => {
  res.send("all items");
};

//create tasks
export const createTask = async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//get single item
export const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

//update task
export const updateTask = (req, res) => {
  res.send("Update item");
};

//Delete task
export const deleteTask = (req, res) => {
  res.send("Delete item");
};
