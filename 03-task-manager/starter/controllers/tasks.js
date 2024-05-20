import taskModel from "../models/tasks.js";

//get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(501).json({ message: error });
  }
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
export const getTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const task = await taskModel.findOne({ _id });
    res.json({ id: req.params.id });
    if (!task) {
      return res.status(404).json({ message: `No task with id :  ${_id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//update task
export const updateTask = (req, res) => {
  res.send("Update item");
};

//Delete task
export const deleteTask = (req, res) => {
  res.send("Delete item");
};
