import { Request, Response } from "express"
import { Task } from "./task-model"


export const createTask = async (req: Request, res: Response) => {

    try {
        const { title, description } = req.body

        if (!title || !description) {
            return res.status(400).json(
                {
                    succes: false,
                    message: "Missing required fields"
                }
            )
        }

        const newTask = await Task.create(
            {
                title,
                description,
            }
        ).save()
        
        res.status(201).json(
            {
                succes: true,
                message: "Task created succesfully"
            }
        )

    } catch (error:any) {
        res.status(500).json(
            {
                succes: false,
                message: "Task can't be created",
                error: error.message
            }
        )
    }
}