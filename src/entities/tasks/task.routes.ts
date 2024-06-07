import { Router } from "express"
import { createTask } from "./task-controller"


const router = Router()

router.post('/', createTask)

export default router;