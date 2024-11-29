# Role-Based-Access-Control-RBAC-
This project implements an Authentication and Authorization system with Role-Based Access Control (RBAC) using Node.js, Express, MongoDB, and JWT. It allows users to register, log in, and access resources based on their assigned roles (Admin, User, Moderator).
### Features
User Registration & Login with secure authentication (password hashing).
Role-Based Access Control (RBAC) to restrict access to specific resources based on user roles.
JWT (JSON Web Tokens) for secure session management and token-based authentication.
MongoDB for storing user and role data.
### Technologies Used
Node.js: JavaScript runtime.

Express.js: Web framework for building RESTful APIs.

MongoDB: NoSQL database for storing users and roles.

JWT: JSON Web Token for secure token-based authentication.

Bcrypt.js: Library for hashing passwords.

dotenv: Environment variable management.

### Setup Instructions
1. Clone the Repository
````
git clone https://github.com/yourusername/rbac-assignment.git
cd rbac-assignment
````
2. Install Dependencies
-Make sure Node.js is installed. Then, install the required dependencies:
````
npm install
````
3. Set Up Environment Variables
-Create a .env file in the root directory with the following content:
````
MONGO_URI=mongodb://localhost:27017/rbac_db
JWT_SECRET=your_jwt_secret_key
````
-Replace your_jwt_secret_key with a secret key for JWT signing.

4. Run MongoDB
Ensure that MongoDB is running on your local machine, or use a cloud database service like MongoDB Atlas.

6. Start the Server
-Run the server using nodemon for auto-reloading during development:

````
npm run dev
````
The server will run on http://localhost:5000.
### API Endpoints
Authentication
1. Register User
Endpoint: POST /auth/register

-Request Body:
````
{
  "username": "user1",
  "password": "password123",
  "roles": ["User"]
}
````
-Response: User registered successfully

2. Login User

-Endpoint: POST /auth/login

-Request Body:
````
{
  "username": "user1",
  "password": "password123"
}
````
-Response:
````
{
  "token": "JWT_Token_Here"
}
````
### User Management
1. Get All Users (Admin Only)
-Endpoint: GET /users
-Authorization: Bearer JWT Token (from login)
-Response:
````
[
  {
    "_id": "user_id",
    "username": "user1",
    "roles": ["User"]
  }
]
````
## Role-Based Access Control
This system uses RBAC to manage different roles and permissions. The following roles are available:
-Admin: Can access all resources.
-User: Can access only public resources.
-Moderator: Can moderate content but has limited access compared to an admin.
Roles are associated with users during registration and used for authorization to restrict access to certain resources.
## Code Structure
config/db.js: MongoDB connection setup.
controllers/: Contains the logic for authentication and user management.
middlewares/: Includes authentication and role-based access control middleware.
models/: Defines MongoDB models for users and roles.
routes/: API route definitions for authentication and user management.
utils/jwtUtils.js: Helper functions for generating and verifying JWTs.
server.js: Main entry point for the server.
## Contributing
Feel free to fork the repository, make changes, and create a pull request. Contributions are welcome!
## License
This project is licensed under the MIT License.
