# API Documentation

REST API documentation for the Aesthetic Dental Clinic backend.

**Base URL:** `http://localhost:5000/api` (development)

## General Information

### Response Format

All API responses follow this structure:

**Success:**
```json
{
  "status": "success",
  "data": { ... }
}
```

**Error:**
```json
{
  "status": "error",
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### HTTP Status Codes

- `200` - OK (successful GET, PUT)
- `201` - Created (successful POST)
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error

### Rate Limiting

- **Window:** 15 minutes
- **Max Requests:** 100 per IP
- Headers included:
  - `X-RateLimit-Limit`
  - `X-RateLimit-Remaining`
  - `X-RateLimit-Reset`

## Endpoints

### Health Check

Check if the API is running.

```
GET /health
```

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-07-06T12:00:00.000Z"
}
```

---

### Services

#### List All Services

Get all dental services.

```
GET /api/services
```

**Query Parameters:**
- `category` (optional) - Filter by category (`Preventive`, `Cosmetic`, `Restorative`)
- `featured` (optional) - Show only featured services (`true` | `false`)

**Response:**
```json
{
  "status": "success",
  "data": {
    "services": [
      {
        "id": "clx1234567890",
        "name": "Teeth Cleaning",
        "slug": "teeth-cleaning",
        "description": "Professional teeth cleaning and polishing",
        "duration": 60,
        "price": 150,
        "category": "Preventive",
        "featured": true
      }
    ]
  }
}
```

#### Get Service by Slug

Get detailed information about a specific service.

```
GET /api/services/:slug
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": "clx1234567890",
    "name": "Teeth Cleaning",
    "slug": "teeth-cleaning",
    "description": "Professional teeth cleaning and polishing...",
    "duration": 60,
    "price": 150,
    "category": "Preventive",
    "featured": true
  }
}
```

**Error Responses:**
- `404` - Service not found

---

### Appointments

#### Create Appointment

Submit a new appointment request.

```
POST /api/appointments
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-123-4567",
  "serviceId": "clx1234567890",
  "preferredDate": "2024-07-15T00:00:00.000Z",
  "preferredTime": "morning",
  "message": "I have dental anxiety, please call before appointment"
}
```

**Validation Rules:**
- `firstName` - Required, 2-50 characters
- `lastName` - Required, 2-50 characters
- `email` - Required, valid email format
- `phone` - Required, valid phone format
- `serviceId` - Required, must exist in database
- `preferredDate` - Required, must be future date
- `preferredTime` - Required, one of: `morning`, `afternoon`, `evening`
- `message` - Optional, max 500 characters

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": "clx0987654321",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1-555-123-4567",
    "serviceId": "clx1234567890",
    "preferredDate": "2024-07-15T00:00:00.000Z",
    "preferredTime": "morning",
    "message": "I have dental anxiety...",
    "status": "pending",
    "createdAt": "2024-07-06T12:00:00.000Z"
  }
}
```

**Error Responses:**
- `400` - Validation errors
- `404` - Service not found

---

### Contact

#### Submit Contact Form

Send a general inquiry.

```
POST /api/contact
```

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Insurance Question",
  "message": "Do you accept Blue Cross insurance?"
}
```

**Validation Rules:**
- `name` - Required, 2-100 characters
- `email` - Required, valid email format
- `subject` - Optional, max 200 characters
- `message` - Required, 10-1000 characters

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": "clx1122334455",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "subject": "Insurance Question",
    "message": "Do you accept Blue Cross insurance?",
    "createdAt": "2024-07-06T12:00:00.000Z"
  }
}
```

**Error Responses:**
- `400` - Validation errors

---

### Testimonials

#### List Published Testimonials

Get all published patient testimonials.

```
GET /api/testimonials
```

**Query Parameters:**
- `limit` (optional) - Number of testimonials to return (default: 10, max: 50)
- `rating` (optional) - Filter by minimum rating (1-5)

**Response:**
```json
{
  "status": "success",
  "data": {
    "testimonials": [
      {
        "id": "clx9988776655",
        "name": "Sarah Johnson",
        "service": "Teeth Whitening",
        "rating": 5,
        "content": "Amazing experience! The staff was professional and caring...",
        "createdAt": "2024-06-01T12:00:00.000Z"
      }
    ]
  }
}
```

---

## Error Handling

### Validation Errors

When validation fails, the response includes detailed field-level errors:

```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "phone",
      "message": "Phone number is required"
    }
  ]
}
```

### Rate Limit Error

When rate limit is exceeded:

```json
{
  "status": "error",
  "message": "Too many requests from this IP, please try again later."
}
```

## Development Notes

### CORS

CORS is enabled for:
- **Development:** `http://localhost:3000`
- **Production:** Set via `CORS_ORIGIN` environment variable

### Email Notifications

Currently using a **mock email service**. In production, integrate with:
- SendGrid
- AWS SES
- Postmark
- Resend

Configuration: `server/.env` (`EMAIL_SERVICE`)

### Database

SQLite in development. For production, consider:
- PostgreSQL (recommended)
- Hosted SQLite (Turso)

---

**API Version:** 1.0  
**Last Updated:** Phase 1 (endpoints to be implemented in Phases 3-4)
