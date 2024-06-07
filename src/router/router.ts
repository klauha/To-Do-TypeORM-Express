import { Router } from "express"
import taskRoutes from "../entities/tasks/task.routes"

const router = Router();
router.use('/tasks', taskRoutes)

export default router;