import { Router } from "express"
import { createTask, deleteTask, getTasks } from "./task-controller"


const router = Router()

router.post('/', createTask)
router.get('/', getTasks)
router.delete('/:id', deleteTask)
export default router;