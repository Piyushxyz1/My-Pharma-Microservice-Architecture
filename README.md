# My-Pharma

My-Pharma is a MERN-based medical e-commerce application built using a microservices architecture.

The application separates authentication, cart management, payment processing and order management into independent backend services.

## Features

* User registration and login
* JWT-based authentication
* Medical product browsing
* Shopping cart management
* Cart quantity management
* Online payment integration with Razorpay
* Order creation and management
* Order history
* Separate backend services for different application responsibilities
* Redux Toolkit for frontend state management

## Tech Stack

**Frontend**

* React.js
* JavaScript
* Redux Toolkit
* React Hooks
* Axios
* HTML5
* CSS3

**Backend**

* Node.js
* Express.js
* REST APIs
* MongoDB
* JWT Authentication

**Payment**

* Razorpay

**Tools**

* Git
* GitHub
* Postman

## Microservices Architecture

My-Pharma is divided into four main backend services:

**Auth Service**

* Handles user registration and login
* Generates and validates JWT authentication tokens
* Manages user authentication

**Cart Service**

* Handles adding products to the cart
* Manages cart quantities
* Retrieves and removes cart items

**Payment Service**

* Creates Razorpay payment orders
* Handles payment verification
* Processes payment-related requests

**Orders Service**

* Creates orders after successful payment
* Stores order information
* Handles order retrieval and order status

### Service Flow

Frontend → Auth Service → JWT

Frontend → Cart Service → Cart Data

Frontend → Payment Service → Razorpay

Frontend → Orders Service → Order Data

## Authentication

JWT is used to authenticate users across the application.

After login, the Auth Service generates a JWT token. The frontend stores the token and sends it with requests to protected services.

The respective service middleware verifies the token and identifies the authenticated user before processing the request.

## Frontend State Management

Redux Toolkit is used as the main state management solution on the frontend.

Authentication state and cart state are maintained through Redux so that shared data can be accessed across different components.

## Payment Flow

The payment process is handled through the Payment Service and Razorpay.

The basic flow is:

User Checkout → Payment Service → Razorpay Order → Payment → Payment Verification → Order Creation

After successful payment verification, the order information is sent for order creation.

## Services

The project contains the following backend services:

* Auth Service
* Cart Service
* Payment Service
* Orders Service

Each service has its own responsibility and exposes APIs for the frontend or required service communication.

## Getting Started

Clone the repository and install the dependencies for the frontend and individual backend services.

Configure the required environment variables for:

* MongoDB
* JWT authentication
* Razorpay

Start the frontend and backend services according to their configured ports.

## Project Highlights

During the development of My-Pharma, I worked on:

* Designing a microservices-based backend architecture
* Developing separate authentication, cart, payment and order services
* Implementing JWT authentication
* Managing frontend state using Redux Toolkit
* Integrating Razorpay payment processing
* Developing REST APIs using Node.js and Express
* Connecting services with MongoDB
* Handling communication between frontend and backend services
* Testing and debugging API integration

## Project Status

My-Pharma is a MERN-based medical e-commerce project developed to practice microservices architecture, authentication, payment integration, state management and REST API development.

## Author

**Piyush Negi**

Full Stack Developer

GitHub: `<your-github-profile>`

Portfolio: `<your-portfolio>`
