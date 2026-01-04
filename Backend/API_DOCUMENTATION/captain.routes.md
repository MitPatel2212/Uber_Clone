# Captain Routes Documentation

## Base URL
`/captain`

---

### POST `/register`

#### Description
Registers a new captain with their details and vehicle information.

#### Request Body
The request body must be a JSON object with the following fields:

| Field                  | Type     | Validation                                                                 | Description                          |
|------------------------|----------|-----------------------------------------------------------------------------|--------------------------------------|
| `email`               | `string` | Must be a valid email address.                                             | Captain's email address.             |
| `fullname.firstname`  | `string` | Must be at least 3 characters long.                                        | Captain's first name.                |
| `password`            | `string` | Must be at least 6 characters long.                                        | Captain's password.                  |
| `vehicle.color`       | `string` | Must be at least 3 characters long.                                        | Vehicle's color.                     |
| `vehicle.plate`       | `string` | Must be at least 3 characters long.                                        | Vehicle's plate number.              |
| `vehicle.capacity`    | `integer`| Must be an integer and at least 1.                                         | Vehicle's passenger capacity.        |
| `vehicle.vehicletype` | `string` | Must be one of the following: `car`, `bike`, `truck`.                      | Type of the vehicle.                 |

#### Example Request
```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstname": "John"
  },
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicletype": "car"
  }
}
```

#### Response

##### Success Response
- **Status Code:** `201 Created`
- **Body:**
```json
{
  "message": "Captain registered successfully",
  "data": {
    "id": "<captain_id>",
    "email": "captain@example.com"
  }
}
```

##### Error Responses
- **Status Code:** `400 Bad Request`
- **Body:**
```json
{
  "error": "Invalid Email"
}
```

- **Status Code:** `500 Internal Server Error`
- **Body:**
```json
{
  "error": "Server error occurred"
}

### Example REsponse 
- 'captain' (objects):
  - 'fullname' (ojects):
     - 'firstname' (string): user's frist name
     - 'lastname' (string): user's 
     last name
- 'email' (string): User's email password
- 'password' (string) User's password
- 'vehicle' (objects)
  - 'color' (string) vehicle color
  - 'capacity' (number) vehicle capacity
  - 'vehicleType' (string) vehicle type
  - 'plate' (string) vehicle number plate

- 'token' (String): JWT Token 


```