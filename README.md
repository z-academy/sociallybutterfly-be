# SociallyButterfly Backend

This is the backend service for the SociallyButterfly platform, responsible for generating ice-breaking questions based on user profiles.

## Set Up

1. Create a `.env` file in the root directory with the following content:

    ```bash
    OPENAI_API_KEY=YOUR_TOKEN
    ```

2. Install the required dependencies and start the server:

    ```bash
    npm ci
    npm run start
    ```

## Endpoints

### 1. Health Check Endpoint

**Endpoint:** `GET /`

**Description:**  
This endpoint checks the health status of the server. If the server is running correctly, it will return a JSON object with the status.

**Response:**

```json
{
  "status": "healthy"
}
```

### 2. Generate Ice-Breaking Questions

**Endpoint:** `POST /api/generate_icebreaking_questions`

**Description:**  
This endpoint generates ice-breaking questions for pairs of profiles. The input is a list of profiles, and the output is a set of questions designed to help break the ice during conversations.

**Request Payload:**

```json
{
  "profiles": [
    {
      "name": "John Doe",
      "offer": "I can help with JavaScript.",
      "lookingFor": "I'm looking for Python mentorship."
    },
    {
      "name": "Jane Smith",
      "offer": "I can help with Python.",
      "lookingFor": "I'm looking for JavaScript expertise."
    }
  ]
}
```




