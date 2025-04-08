# TaskMaster - Backend

## Overview

The backend of TaskMaster is built with **Node.js** and **Express**, using **Prisma ORM** to interact with a **MySQL** database. The backend provides RESTful APIs for managing tasks, including task creation, viewing, and deletion. It also includes user authentication, ensuring that only authorized users can manage their own tasks.

## Tech Stack

- **Backend Framework**: Node.js with Express
- **Database**: MySQL
- **ORM**: Prisma
- **Authentication**: jwt authentication

## Backend Setup Instructions

### Prerequisites

Before setting up the backend, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/) or a compatible database service
- [Prisma](https://www.prisma.io/docs/getting-started) for ORM management

### Steps to Run the Backend Locally

1. **Clone the repository:**

   Clone the repository if you haven't already:

   ```bash
   git clone https://github.com/bishnuf66/task_manager_backend.git
   cd task_manager_backend
   ```

2. **Install dependencies:**

   Install the required packages:

   ```bash
   npm install
   ```

3. **Set up the database:**

   Make sure your MySQL server is running. Then, set up the database by running Prisma migrations:

   ```bash
   npx prisma migrate dev --name init
   ```

   This will create the necessary tables and schema in your database.

4. **Configure environment variables:**

   Create a `.env` file in the root of the backend directory and add the following environment variables:

   ```env
    PORT=8000
    frontend_url=http://localhost:5173
    SECRET_KEY=taskmanager
   DATABASE_URL=mysql://user:password@localhost:3306/taskmaster
   ```

   Replace `user`, `password`, `localhost:3306`,`frontend_url` and `port` acccording to you setup.

5. **Start the backend server:**

   Start the backend server with the following command:

   ```bash
   npm run dev
   ```

   The backend will run locally at `http://localhost:8000`.

---

## API Endpoints

### Task Management

- **GET /tasks**: Fetch all tasks for the authenticated user.
- **POST /tasks**: Create a new task for the authenticated user.
- **PUT /tasks/:id**: Update a task for the authenticated user.
- **DELETE /tasks/:id**: Delete a specific task by ID, ensuring the task belongs to the authenticated user.

### Authentication

- **POST /auth/login**: Login with email to authenticate the user and generate a jsonwebtoken.

### Error Handling

All API endpoints handle errors gracefully and provide meaningful error messages, such as:

- **Unauthorized**: If the user tries to access tasks that do not belong to them.
- **Not Found**: If a task does not exist.
- **Server Errors**: If there’s an issue with the server or database interaction.

---

## Conclusion

The backend of TaskMaster handles all task-related operations, including authentication, task creation, viewing, and deletion. It uses Prisma to interact with MySQL, and it ensures that only authorized users can manage their tasks. After setting up the backend, it will work seamlessly with the frontend, providing a secure and efficient way to manage tasks.

---

.env is included for easy setup and reference
