import { Router } from "express"
import { createTask, deleteTask, getTasks, updateTask } from "./task-controller"


const router = Router()

router.post('/', createTask)
router.get('/', getTasks)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)
export default router;