## ![alt text](image-1.png)TO-DO APP 
This is an API project for managing a to-do list. The API allows creating, retrieving, updating, and deleting tasks. It is built with Node.js, Express, and TypeORM.

## Endpoints

1. Create a Task
URL: /tasks
Method: POST
Description: Creates a new task.
Request Body:

    {
        "title": "Task title",
        "description": "Task description",
        "isCompleted": false
    }
Successful Response:

    {
        "success": true,
        "message": "Task created successfully"
    }

2. Get All Tasks
URL: /tasks
Method: GET
Description: Retrieves all tasks.
Successful Response:

    "success": true,
    "message": "All Issues Retrieved",
    "data": [
        {
            "id": 1,
            "title": "Task title",
            "description": "Task description",
            "isCompleted": false
        }
    ]

3. Delete a Task
URL: /tasks/:id
Method: DELETE
Description: Deletes a task by its ID.
Successful Response:    
    {
        "success": true,
        "message": "Task deleted successfully"
    }
4. Update a Task
URL: /tasks/:id
Method: PUT
Description: Updates an existing task by its ID.
Request Body:

    {
        "title": "New task title",
        "description": "New task description",
        "isCompleted": true
    }
Successful Response:

    {
        "success": true,
        "message": "Task updated successfully"
    }
