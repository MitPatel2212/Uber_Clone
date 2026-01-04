# Uber Clone Backend API

## Overview
This is the backend API for the Uber Clone application built with Node.js, Express, and MongoDB.

---

## Endpoints

### User Registration

#### `POST /users/register`

**Description:**  
Registers a new user account in the system. The endpoint validates input data, hashes the password using bcrypt, creates a user record in the database, and returns a JWT authentication token.

---

### Request Details

**URL:**
```
POST /users/register
```

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securePassword123"
}
```

---

### Data Requirements

| Field | Type | Required | Validation | Description |
|-------|------|----------|-----------|-------------|
| `email` | String | Yes | Valid email format | User's email address (must be unique) |
| `fullname.firstname` | String | Yes | Min 3 characters | User's first name |
| `fullname.lastname` | String | No | Min 3 characters (if provided) | User's last name |
| `password` | String | Yes | Min 6 characters | User's password (bcrypt hashed before storage) |

**Validation Error Messages:**
- Email: `"Invalid Email"`
- First Name: `"first name must be at least 3 charecters long"`
- Password: `"password must be atleast 6 charecters long"`

---

### Response

#### Success Response (Status: 201 Created)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjZhNzc4ZjQxNzM2YjAwMTYzNDU2YjAiLCJpYXQiOjE2MDA5NzI5MTZ9.sxWv6...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

#### Error Response - Validation Failed (Status: 400 Bad Request)
```json
{
  "errors": [
    {
      "type": "field",
      "value": "invalid-email",
      "msg": "Invalid Email",
      "path": "email",
      "location": "body"
    },
    {
      "type": "field",
      "value": "ab",
      "msg": "first name must be at least 3 charecters long",
      "path": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

### Status Codes

| Code | Status | Description |
|------|--------|-------------|
| `201` | Created | User successfully registered. Returns authentication token and user object. |
| `400` | Bad Request | Validation failed. Check errors array for specific field validation issues. |
| `500` | Internal Server Error | Server error occurred during registration. |

---

### Example Requests

**Valid Request:**
```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "password": "password123"
  }'
```

**Invalid Request (Email format):**
```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "invalid-email",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "password": "password123"
  }'
```
Response: 400 Bad Request with validation error

**Invalid Request (Short firstname):**
```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "fullname": {
      "firstname": "Jo",
      "lastname": "Doe"
    },
    "password": "password123"
  }'
```
Response: 400 Bad Request - first name must be at least 3 characters

**Invalid Request (Short password):**
```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "password": "12345"
  }'
```
Response: 400 Bad Request - password must be at least 6 characters

---

### Important Notes

- **Password Security:** Passwords are hashed using bcrypt with 10 salt rounds before storage
- **JWT Token:** Authentication token is generated using JWT and signed with `JWT_SECRET` environment variable
- **Email Uniqueness:** Email addresses must be unique in the database
- **Optional Field:** The `lastname` field is optional
- **Password Not Returned:** User password is never returned in API responses (select: false in schema)

---

### Technologies Used

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM (Object Data Modeling)
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT token generation
- **express-validator** - Request validation

### Request Body 

THe erequest body should be in JSON format and include the following fields:

- `user` (onject):
  - `fullname` (object).
     - `firstname` (string , required) : User's firstname (minimum 3 Characters).
     - `lastname` (string , required) : User's lastname (minimum 3 Characters).
  - `email` (string, required)" User's email address (must be a valid email).
  - `password` (string, requiered): Usser's password (minimum 6 character).

<!-- ### Exmaple Response
- `user` (onject):
  - `fullname` (object).
     - `firstname` (string , required) : User's firstname (minimum 3 Characters).
     - `lastname` (string , required) : User's lastname (minimum 3 Characters).
  - `email` (string, required)" User's email address (must be a valid email).
  - `password` (string, requiered): Usser's password (minimum 6 character). -->

<!-- - `user` (onject):
  - `fullname` (object).
     - `firstname` (string , required) : User's firstname (minimum 3 Characters).
     - `lastname` (string , required) : User's lastname (minimum 3 Characters).
  - `email` (string, required)" User's email address (must be a valid email).
  - `password` (string, requiered): Usser's password (minimum 6 character). -->


### Exmaple Response

- `user` (onject):
  - `fullname` (object ).
     - `firstname` (string ) : User's firstname (minimum 3 Characters).
     - `lastname` (string ) : User's lastname (minimum 3 Characters).
  - `email` (string )" User's email address (must be a valid email).
  - `password` (string ): Usser's password (minimum 6 character).
- `token` (string): JWT Token

---

### User Profile

#### `GET /users/profile`

**Description:**  
Fetches the profile of the currently authenticated user. The endpoint requires the user to be logged in and authenticated.

---

### Request Details

**URL:**
```
GET /users/profile
```

**Headers:**
```
Authorization: Bearer <token>
```

---

### Response

#### Success Response (Status: 200 OK)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com",
  "socketId": null,
  "__v": 0
}
```

#### Error Response - Unauthorized (Status: 401 Unauthorized)
```json
{
  "message": "Authentication required"
}
```

---

### User Logout

#### `GET /users/logout`

**Description:**  
Logs out the currently authenticated user by clearing the authentication token and blacklisting it.

---

### Request Details

**URL:**
```
GET /users/logout
```

**Headers:**
```
Authorization: Bearer <token>
```

---

### Response

#### Success Response (Status: 200 OK)
```json
{
  "message": "Logged out"
}
```

#### Error Response - Unauthorized (Status: 401 Unauthorized)
```json
{
  "message": "Authentication required"
}
```

### Exmaple Response

- `user` (onject):
  - `fullname` (object ).
     - `firstname` (string ) : User's firstname (minimum 3 Characters).
     - `lastname` (string ) : User's lastname (minimum 3 Characters).
  - `email` (string )" User's email address (must be a valid email).

  ## '/users/logout' Endpoint

  ### Description

  Logout the current user and blacklist the token provided tin the cookie or headers

### HTTP Mehtod

'GET'

### Authentication

Requires a valid JWT token in the Authorization header:

  - `password` (string ): Usser's password (minimum 6 character).
- `token` (string): JWT Token

---