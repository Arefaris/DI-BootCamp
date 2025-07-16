//app.js

import express from "express"
import { tasksRouter } from "./routes/tasksRoutes.js"

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use("/", tasksRouter)

app.listen(PORT, ()=>{
    console.log("Listenin on port" + PORT)
})

//routes/tasksRoutes.js
import { Router } from "express";
import {getAllTasks, getTask, createTask, updateTask, deleteTask} from "../controllers/tasksController.js"

export const tasksRouter = Router()

tasksRouter.get("/tasks", getAllTasks)
tasksRouter.get("/tasks/:id", getTask)
tasksRouter.post("/tasks/", createTask)
tasksRouter.put("/tasks/:id", updateTask)
tasksRouter.delete("/tasks/:id", deleteTask)

//controllers/taskController.js
import {readFile, writeFile} from "fs/promises"



export const getAllTasks = async(req, res)=>{
    let data = await readFile("./models/tasks.json", "utf-8")
    data = await JSON.parse(data)
    res.json(data)
}

export const getTask = async(req, res)=>{

    let data = await readFile("./models/tasks.json", "utf-8")
    data = await JSON.parse(data)

    const {id} = req.params

    if (!id){
        res.status(500).json({message: "Invalid id"})
    }

    const index = data.findIndex(data => data.id == id)

    if (index === -1){
        res.status(500).json({message: "Task not found"})
        return
    }else {
        res.json(data[index])
    }

   
}

export const createTask = async(req, res)=>{
    const {task} = req.body

    if(!task){
        res.status(500).json({message: "No task provided"})
        return
    }

    let data = await readFile("./models/tasks.json", "utf-8")
    data = await JSON.parse(data)

    data.push({
        id: data.length + 1,
        task: task
    })

    data = JSON.stringify(data)
    await writeFile("./models/tasks.json", data)
    res.json({message: "Task added"})

}

export const updateTask = async(req, res)=>{
    const {id} = req.params
    const {task} = req.body

    if (!id){
        res.status(500).json({message: "Invalid id"})
    }

    let data = await readFile("./models/tasks.json", "utf-8")
    data = await JSON.parse(data)

    const index = data.findIndex(data => data.id == id)
    if (index === -1){
        res.status(500).json({message: "Task not found"})
        return
    }

    data[index] = {...data[index], task: task}

    data = JSON.stringify(data)
    await writeFile("./models/tasks.json", data)
    
    res.json({message: "task was updated"})
}

export const deleteTask = async(req, res)=>{
    const {id} = req.params

    let data = await readFile("./models/tasks.json", "utf-8")
    data = await JSON.parse(data)

    const index = data.findIndex(data => data.id == id)
    if (index === -1){
        res.status(500).json({message: "Task not found"})
        return
    }

    data.splice(index, 1)

    data = JSON.stringify(data)

    await writeFile("./models/tasks.json", data)

    res.json({message: "task was deleted"})
}
