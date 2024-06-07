import { Request, Response } from "express"
import { Task } from "./task-model"


export const createTask = async (req: Request, res: Response) => {

    try {
        const { title, description, isCompleted } = req.body

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
                isCompleted
            }
        ).save()

        res.status(201).json(
            {
                succes: true,
                message: "Task created succesfully"
            }
        )

    } catch (error: any) {
        res.status(500).json(
            {
                succes: false,
                message: "Task can't be created",
                error: error.message
            }
        )
    }
}

export const getTasks = async (req: Request, res: Response) => {
    try {
        const allTasks = await Task.find()

        if (!allTasks || allTasks.length === 0)
            return res.status(404).json({
                succes: false,
                message: "Tasks not found"
            })
        res.status(200).json(
            {
                succes: true,
                message: "All Issues Retrieved",
                data: allTasks
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Tasks can't be retrieved",
        })

    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {

        const taskId = req.params.id
        const taskToDelete = await Task.findOneBy(
            {
                id: parseInt(taskId)
            },
        )

        if (!taskToDelete) {
            return res.status(404).json({
                success: false,
                message: "Task not found to delete on DB"
            })
        }
        await Task.delete(
            {
                id: parseInt(taskId)
            },
        )
        res.status(201).json(
            {
                success: true,
                message: "Task deleted successfully"
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "cant delete Task"
            }
        )
    }
}

 export const updateTask = async (req:Request, res:Response) =>{

    const taskId = req.params.id
    const { title, description, isCompleted } = req.body

    try {
        const taskToUpdate = await Task.findOneBy(          
            {
                id: parseInt(taskId)
            }
        )                   
        if (!taskToUpdate) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Task not found to update"
                }
            )
        }   
        taskToUpdate.title = title      
        taskToUpdate.description = description
        taskToUpdate.isCompleted = isCompleted
        await taskToUpdate.save()
        res.status(201).json(
            {
                success: true,
                message: "Task updated successfully"
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Task can't be updated"
            }
        )
    }
 }