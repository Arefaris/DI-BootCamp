import { Router } from "express";

export const router = Router()

router.get("/homepage", (req, res)=>{
    res.json("homepage")
})
router.get("/about", (req, res)=>{
    res.json("about")
})