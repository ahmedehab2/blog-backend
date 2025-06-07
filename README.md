# Blog Backend

This project is a backend application for a blogging platform built with Express and MongoDB. It provides RESTful APIs for user authentication and post management.

## Features

- User registration and login
- CRUD operations for blog posts
- Authentication middleware
- MongoDB database integration

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd blog-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

## Running the Application

To start the server, run:

```bash
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login an existing user

### Posts

- `GET /api/posts` - Retrieve all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Retrieve a post by ID
- `PUT /api/posts/:id` - Update a post by ID
- `DELETE /api/posts/:id` - Delete a post by ID
