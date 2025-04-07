# Task Manager App

## Description

The **Task Manager App** is a simple, full-stack task management application. It allows users to create, update, delete, and manage tasks with options to filter them by priority and status. The app is built with a **React** frontend and a **Node.js/Express** backend, using **TypeScript** for both.

## Frontend

The frontend of the Task Manager App is built with **React** (or **Next.js**) and **TypeScript**. It is styled with **Tailwind CSS** for a responsive design. Axios is used for API requests, and notifications are handled via **React Hot Toast**. The frontend allows users to manage tasks by creating new ones, updating existing tasks, and deleting tasks. It also provides filters for task status and priority.

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager-app-frontend.git
   cd task-manager-app-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The frontend should now be running at `http://localhost:3000`.

## Backend

The backend is built using **Node.js** with the **Express** framework and **TypeScript**. It uses **PostgreSQL** or **MongoDB** (depending on your choice) for the database and manages tasks with a set of RESTful APIs. The backend provides endpoints to create, update, delete, and fetch tasks, along with authentication (optional) and authorization features.

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager-app-backend.git
   cd task-manager-app-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the necessary environment variables:

   ```bash
   DB_URL=your-database-connection-string
   PORT=5000
   JWT_SECRET=your-jwt-secret
   ```

4. Run the migration (if using a SQL database) or set up your MongoDB database (if using MongoDB):

   - For PostgreSQL (using Prisma):
     ```bash
     npx prisma migrate dev
     ```
   - For MongoDB (using Mongoose), just ensure your database is connected via the connection string in `.env`.

5. Start the server:

   ```bash
   npm run dev
   ```

   The backend should now be running at `http://localhost:5000`.

## Usage

1. **Frontend**:
   - Access the task manager app on `http://localhost:3000`.
   - You can create new tasks, mark tasks as completed, and delete tasks.
   - Use the search and filters to manage tasks effectively.
2. **Backend**:
   - The backend exposes RESTful API endpoints for managing tasks.
   - The available endpoints are:
     - `GET /tasks`: Fetch all tasks.
     - `POST /tasks`: Create a new task.
     - `PUT /tasks/:id`: Update an existing task.
     - `DELETE /tasks/:id`: Delete a task.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Axios, React Hot Toast
- **Backend**: Node.js, Express, TypeScript, JWT Authentication (optional), PostgreSQL/MongoDB, Prisma/Mongoose
- **Development Tools**: npm, dotenv
