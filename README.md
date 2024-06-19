# TodoApp-Authentication
Project: Todo Authentication Backend Application

### Introduction

This project is a backend application for managing a Todo list with user authentication. It allows users to sign up and log in to create, view, update, delete, and search for Todo items. The application uses MongoDB for data storage, Express.js as the web framework, and JSON Web Tokens (JWT) for authentication.

### Key Features

1. *User Authentication:*
   - *Sign-Up:* New users can create an account by providing a username and password.
   - *Sign-In:* Existing users can log in to access their Todo list.

2. *JWT Authentication:*
   - On successful sign-in, the application generates a JWT token that is required for accessing protected routes.

3. *Todo Management:*
   - *Create Todo:* Users can create new Todo items.
   - *View Todos:* Users can view their Todo list with pagination support.
   - *View Single Todo:* Users can view details of a specific Todo item.
   - *Update Todo:* Users can update their existing Todo items.
   - *Delete Todo:* Users can delete their Todo items.
   - *Search Todos:* Users can search for Todo items based on a search string.

4. *Additional Features:*
   - *Favorite Todos:* Users can mark Todo items as favorites.
   - *Pagination:* All list views support pagination to handle large data sets efficiently.

### Project Structure

The project follows a modular structure, separating concerns into different files and directories:

- app.js: Main entry point for the application. Configures middleware and routes, and starts the server.
- db.js: Utility for connecting to the MongoDB database.
- user.js: Mongoose model for the User schema.
- todo.js: Mongoose model for the Todo schema.
- authController.js: Controller for handling authentication (sign-up and sign-in) logic.
- todoController.js: Controller for handling Todo CRUD operations and search functionality.
- authMiddleware.js: Middleware for verifying JWT tokens and protecting routes.
- authRoutes.js: Defines routes for user authentication (sign-up and sign-in).
- todoRoutes.js: Defines routes for Todo CRUD operations and search functionality.

### Code Walkthrough

# app.js#
- Sets up the Express server.
- Configures middleware for parsing JSON requests.
- Connects to the MongoDB database using the db.js utility.
- Defines the routes for authentication and Todo management.
- Starts the server on the specified port.

# db.js#
- Contains a function to connect to the MongoDB database using Mongoose.

# user.js#
- Defines the User schema with fields for username and password.
- Pre-save middleware hashes the user's password.
- Adds a method to compare passwords during login.

# todo.js#
- Defines the Todo schema with fields for user, title, description, isFavorite, and createdAt.

# authController.js#
- Handles user sign-up and sign-in.
- Creates a new user and saves them to the database during sign-up.
- Verifies user credentials and generates a JWT token during sign-in.

# todoController.js#
- Handles creating, reading, updating, and deleting Todo items.
- Implements pagination and search functionality for listing Todo items.

#authMiddleware.js#
- Middleware function to protect routes by verifying JWT tokens.

# authRoutes.js#
- Defines routes for user sign-up and sign-in.
- Routes are /api/auth/signup and /api/auth/signin.

*todoRoutes.js*
- Defines routes for managing Todo items, protected by authMiddleware.
- Routes include:
  - POST /api/todos: Create a new Todo.
  - GET /api/todos: List all Todos with pagination and search.
  - GET /api/todos/:id: Get a specific Todo by ID.
  - PUT /api/todos/:id: Update a specific Todo by ID.
  - DELETE /api/todos/:id: Delete a specific Todo by ID.

*Dependencies*

- *Express:* Web framework for building the API.
- *Mongoose:* ODM library for MongoDB.
- *bcryptjs:* Library for hashing passwords.
- *jsonwebtoken:* Library for generating and verifying JWT tokens.

Conclusion

This Todo Authentication Backend Application is a comprehensive example of building a secure, scalable, and feature-rich API using Node.js, Express, and MongoDB. It demonstrates how to implement user authentication, protected routes, and basic CRUD operations with additional features like pagination and search.
