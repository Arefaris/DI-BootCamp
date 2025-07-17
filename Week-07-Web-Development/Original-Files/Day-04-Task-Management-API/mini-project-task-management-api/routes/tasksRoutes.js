import { Router } from "express";
import {getAllTasks, getTask, createTask, updateTask, deleteTask} from "../controllers/tasksController.js"

export const tasksRouter = Router()

tasksRouter.get("/tasks", getAllTasks)
tasksRouter.get("/tasks/:id", getTask)
tasksRouter.post("/tasks/", createTask)
tasksRouter.put("/tasks/:id", updateTask)
tasksRouter.delete("/tasks/:id", deleteTask)