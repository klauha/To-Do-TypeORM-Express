import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Task } from "../entities/tasks/task-model"
import { Task1717748545556 } from "./migrations/1717748545556-task"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities:[Task],
    migrations:
        [
         Task1717748545556
        ],
    synchronize: false,
    logging: false,
})