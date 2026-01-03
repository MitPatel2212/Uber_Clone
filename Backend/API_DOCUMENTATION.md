# API Documentation

## User Registration Endpoint

### `POST /users/register`

#### Description
This endpoint allows users to register a new account in the Uber Clone application. It validates the input data, hashes the password, creates a user record, and returns an authentication token.

---

### Request

#### Method
`POST`

#### URL
```
/users/register
```

#### Headers
```
Content-Type: application/json
```

#### Request Body
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

#### Field Requirements

| Field | Type | Required | Validation Rules | Description |
|-------|------|----------|------------------|-------------|
| `email` | String | Yes | Valid email format | User's email address |
| `fullname.firstname` | String | Yes | Minimum 3 characters | User's first name |
| `fullname.lastname` | String | No | Minimum 3 characters (if provided) | User's last name |
| `password` | String | Yes | Minimum 6 characters | User's password (will be hashed) |

---

### Response

#### Success Response (Status: 201)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
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

#### Error Response - Validation Failed (Status: 400)
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
    },
    {
      "type": "field",
      "value": "12345",
      "msg": "password must be atleast 6 charecters long",
      "path": "password",
      "location": "body"
    }
  ]
}
```

---

### Status Codes

| Status Code | Description |
|-------------|-------------|
| `201` | User successfully registered. Returns authentication token and user data. |
| `400` | Bad Request - Validation failed. Check the error array for details about what fields failed validation. |
| `500` | Internal Server Error - An unexpected error occurred on the server. |

---

### Validation Rules

The endpoint enforces the following validation rules:

1. **Email**
   - Must be a valid email format
   - Error message: "Invalid Email"

2. **First Name**
   - Minimum length: 3 characters
   - Error message: "first name must be at least 3 charecters long"

3. **Password**
   - Minimum length: 6 characters
   - Error message: "password must be atleast 6 charecters long"
   - Password is hashed using bcrypt (salt rounds: 10) before being stored

---

### Example Requests

#### Valid Request
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

#### Invalid Request (Missing Fields)
```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "fullname": {
      "firstname": "Jo"
    }
  }'
```
Response will return 400 status with validation errors.

---

### Notes

- The authentication token is generated using JWT and signed with the `JWT_SECRET` environment variable
- The user's password is hashed using bcrypt and never returned in the response
- The `lastname` field is optional during registration
- Email addresses must be unique in the database
