//get all tasks
export const getAllTasks = (req, res) => {
  res.send("all items");
};

//create tasks
export const createTask = (req, res) => {
  res.json(req.body);
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
