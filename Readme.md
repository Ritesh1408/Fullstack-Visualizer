# Full-Stack Application: CRUD API with React Frontend and React Flow Visualization

## Overview
This project implements a full-stack application featuring a CRUD API backend and a React frontend with interactive user visualization using the `react-flow` library.

## Features

### Backend
1. **CRUD Operations for Users**:
   - **GET** `/api/users`: Retrieve all users.
   - **POST** `/api/users`: Create a new user.
   - **PUT** `/api/users/{userId}`: Update an existing user.
   - **DELETE** `/api/users/{userId}`: Delete a user.

2. **User Object Structure**:
   - `id`: Unique identifier (UUID) generated on the server.
   - `username`: User's name (string, required).
   - `age`: User's age (number, required).
   - `hobbies`: Array of strings representing user hobbies (required, can be empty).

3. **Error Handling**:
   - Non-existing endpoints return a `404` error.
   - Server errors return a `500` error.

4. **Environment Configuration**:
   - Configurable via `.env` file (e.g., `PORT`).

### Frontend
1. **React Application Features**:
   - **Main Visualization Area**:
     - Uses `react-flow` to display users as nodes.
     - User nodes show the username and age.
     - Hobbies appear as child nodes connected to the user.
   
   - **Sidebar Component**:
     - Lists available hobby categories.
     - Allows hobbies to be draggable.
     - Enables dropping hobbies onto user nodes to associate them.
     - Includes a search/filter for hobbies.
   
   - **User Management**:
     - Form to create and edit users.
     - Validates required fields.
     - Displays success/error notifications.
     - Provides confirmation dialogues for deletions.

2. **State Management**:
   - Maintains consistent state between backend and frontend.
   - Handles loading states and errors.

3. **Best Practices**:
   - React v18+ and TypeScript are used.
   - Follows React component organization and best practices.

## Setup Instructions

### Prerequisites
- Node.js v22+ LTS
- npm or yarn
- Docker (optional, for running the backend in a containerized environment)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```
   Fill in the environment variables (e.g., `PORT`).

4. Run the server:
   ```bash
   npm start
   ```

5. API Documentation:
   - Base URL: `http://localhost:<PORT>`
   - Endpoints:
     - `GET /api/users`
     - `POST /api/users`
     - `PUT /api/users/{userId}`
     - `DELETE /api/users/{userId}`

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```
   Fill in the environment variables (e.g., `REACT_APP_API_URL` pointing to the backend).

4. Start the development server:
   ```bash
   npm start
   ```

5. Access the application:
   - URL: `http://localhost:3000`

## Directory Structure

### Backend
```
backend/
├── src/
│   ├── controllers/    # API logic
│   ├── models/         # User schema
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── app.ts          # Entry point
├── .env.example        # Example environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Documentation
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── UserManagement.tsx
│   │   ├── VisualisationArea.tsx
│   │   └── Notification.tsx
│   ├── hooks/
│   │   └── useUsers.ts
│   ├── pages/
│   │   └── Home.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── vite.svg
├── .env.example        # Example environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Documentation
```

## Bonus Features
1. **Frontend Enhancements**:
   - Hobby search and filter in the sidebar.
   - Enhanced visualizations with interactive controls.

2. **Backend Enhancements**:
   - Use of a database (e.g., MongoDB, PostgreSQL).
   - Asynchronous operations for scalability.

3. **Docker Support**:
   - Dockerfile for containerizing the backend.
   - Docker Compose for multi-service orchestration.

4. **Testing**:
   - Unit and integration tests for both backend and frontend.

## Notes
- The project follows React and Node.js best practices for maintainability and scalability.
- Ensure all dependencies are installed before starting the application.



