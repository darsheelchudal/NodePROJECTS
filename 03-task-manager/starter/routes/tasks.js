import express from "express";
import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";
const router = express.Router(getAllTasks);

//get Tasks
router.route("/").get(getAllTasks).post(createTask);
// router.route("/").post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
