import { Router } from "express";

export const router = Router()

let todos = [
];

router.get("/todos", (req, res)=>{
    res.json(todos)
})

router.post("/todos", (req, res)=>{
    const {task} = req.body

    todos.push({
        id: todos.length + 1,
        task: task
    })

    res.json(todos)

})

router.put("/todos/:id", (req, res)=>{
    const {id} = req.params
    const {task} = req.body

    const index = todos.findIndex(task => task.id == id)
    if (index === -1) {
        res.status(404).json("user not found")
    }

    todos[index] = {...todos[index], task}

    res.json(todos)

})

router.delete("/todos/:id", (req, res)=>{
    const {id} = req.params

    const index = todos.findIndex(task => task.id == id)
    if (!index) {
        res.status(404).json("user not found")
    }

    todos.splice(index, 1)

    res.json(todos)

})

