# My-Pharma

My-Pharma is a MERN-based medical e-commerce application designed around a microservices architecture.

Instead of handling the complete application through a single backend, the system separates authentication, cart management, payments and order processing into independent services. An API Gateway acts as the entry point for the frontend and routes requests to the appropriate service.

The project was built to work with a distributed backend setup while keeping the frontend, business responsibilities and service configuration separated.

## Architecture

```text
                         React + Redux Frontend
                                  |
                                  v
                             API Gateway
                                  |
              +-------------------+-------------------+
              |                   |                   |
              v                   v                   v
        Auth Service        Cart Service       Payment Service
              |                   |                   |
              v                   v                   v
           MongoDB             MongoDB             Razorpay
                                                      |
                                                      v
                                             Payment Verification
                                                      |
                                                      v
                                               Orders Service
                                                      |
                                                      v
                                                   MongoDB
```

Each backend service has its own responsibility and can be developed, configured and deployed independently.

## Core Engineering

### Service Separation

The backend is split according to application responsibilities rather than keeping all business logic inside one Express server.

* **Auth Service** handles identity and JWT generation.
* **Cart Service** manages user cart data.
* **Payment Service** handles Razorpay order creation and verification.
* **Orders Service** manages the final order record and order retrieval.
* **API Gateway** provides a single backend entry point for the frontend.

This separation keeps changes in one domain from directly affecting the implementation of another service.

### API Gateway

The frontend communicates through an API Gateway instead of directly depending on multiple service endpoints.

The gateway routes incoming requests to the required backend service based on the API path.

```text
Frontend
   |
   v
API Gateway
   |
   +---- /auth     → Auth Service
   |
   +---- /cart     → Cart Service
   |
   +---- /payment  → Payment Service
   |
   +---- /orders   → Orders Service
```

This also provides a cleaner setup for deploying the individual backend services separately.

## Authentication

Authentication is implemented using JWT.

The Auth Service generates the token after successful login. Protected requests carry the token to the backend, where service middleware verifies the token and identifies the authenticated user.

```text
Login
  |
  v
Auth Service
  |
  v
JWT
  |
  v
Redux Auth State
  |
  v
Protected Request
  |
  v
JWT Verification
  |
  v
Authenticated User
```

The authenticated user's identity is then used by services such as Cart and Orders to access user-specific data.

## Payment Architecture

Razorpay is integrated through a dedicated Payment Service instead of placing payment logic inside the frontend or Orders Service.

The payment flow is:

```text
Checkout
   |
   v
Payment Service
   |
   v
Create Razorpay Order
   |
   v
Razorpay Checkout
   |
   v
Payment Completed
   |
   v
Backend Verification
   |
   v
Orders Service
   |
   v
Order Created
```

Payment verification is performed on the backend before the order is created.

This keeps the payment credentials and verification logic away from the client-side application.

## Order Processing

Orders are created only after the payment flow reaches the verification stage.

The order record contains the relevant purchase information, shipping details and payment references required for order history.

The Orders Service is responsible for persisting and retrieving this information independently from the Cart and Payment services.

## Frontend Architecture

The frontend is developed using React and Vite.

Redux Toolkit is used for application-wide state that needs to be shared across different parts of the application.

Current Redux-managed state includes:

* Authentication state
* JWT token
* Logged-in user
* Cart state

Axios is used for API communication, while React Router handles client-side navigation and protected application routes.

## Tech Stack

### Frontend

* React
* JavaScript
* Vite
* Redux Toolkit
* React Router
* Axios
* Tailwind CSS
* Lucide React

### Backend

* Node.js
* Express.js
* REST APIs
* MongoDB
* JWT
* Axios

### Infrastructure and Integration

* API Gateway
* Razorpay
* Environment-based configuration
* Independent backend services

### Development

* Git
* GitHub
* Thunder Client
* VS Code

## Backend Services

| Service         | Responsibility                                        |
| --------------- | ----------------------------------------------------- |
| Auth Service    | User authentication and JWT handling                  |
| Cart Service    | User cart persistence and cart operations             |
| Payment Service | Razorpay order creation and payment verification      |
| Orders Service  | Order creation, persistence and order retrieval       |
| API Gateway     | Request routing between frontend and backend services |

## Security

The project keeps sensitive configuration outside the source code through environment variables.

The following types of configuration are handled through environment variables:

```text
MONGODB_URI
JWT_SECRET
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
SERVICE_URL
```

The Razorpay secret key and JWT secret are used only on the backend.

Protected APIs validate the JWT before processing authenticated requests.

## Service Communication

The application uses HTTP-based communication between the frontend, gateway and backend services.

Service URLs are configurable through environment variables so that the same application structure can be used across local development and deployed environments.

This makes it possible to run the services locally on separate ports and later point the gateway to their deployed URLs without changing the application architecture.

## Deployment

The application is structured for separate deployment of its frontend and backend components.

The frontend can be deployed independently from the backend services, while each backend service can run as its own deployment.

A typical production flow is:

```text
                    Frontend
                       |
                       v
                  API Gateway
                       |
        +--------------+--------------+
        |              |              |
        v              v              v
      Auth           Cart          Payment
        |              |              |
        v              v              v
     Database       Database       Razorpay
                                      |
                                      v
                                    Orders
                                      |
                                      v
                                   Database
```

Service URLs and credentials are supplied through the deployment environment rather than being hardcoded into the application.

## Project Structure

```text
My-Pharma/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   │
│   ├── auth-service/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   │
│   ├── cart-service/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   │
│   ├── payment-service/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── server.js
│   │
│   ├── orders-service/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   │
│   └── api-gateway/
│       ├── server.js
│       └── package.json
│
└── package.json
```

Each service owns the code related to its particular domain instead of sharing one large backend codebase.

## Local Setup

Clone the repository:

```bash
git clone <repository-url>
cd My-Pharma
```

Install the frontend dependencies:

```bash
cd frontend
npm install
```

Install dependencies inside each backend service:

```bash
npm install
```

Configure the required environment variables for the services.

Start the individual backend services using their respective development commands.

Start the frontend:

```bash
npm run dev
```

Once the services are running, the frontend communicates with the backend through the configured API Gateway.

## What This Project Demonstrates

My-Pharma focuses on the backend and system-design problems involved in moving from a monolithic application toward a service-oriented architecture.

The main areas implemented in the project include:

* Designing service boundaries around business responsibilities
* Building and connecting independent Express services
* Implementing JWT-based authentication across protected APIs
* Introducing an API Gateway between the frontend and backend services
* Integrating Razorpay with backend payment verification
* Connecting successful payment verification with order creation
* Managing shared frontend state using Redux Toolkit
* Using environment-based configuration for local and deployed environments
* Persisting application data using MongoDB
* Deploying frontend and backend components independently
* Debugging API communication across multiple services and environments

## Project Status

My-Pharma is a working project developed as a practical implementation of a microservices-based e-commerce system.

The project focuses on understanding how authentication, cart, payment and order responsibilities can be separated into independent services while keeping the frontend connected through a single API entry point.

## Author

**Piyush Negi**
