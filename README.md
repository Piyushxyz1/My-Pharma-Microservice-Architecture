# Medical Store - CI/CD Deployment Project

## Overview

This project demonstrates a complete DevOps CI/CD pipeline for deploying a Medical Store application using Jenkins, Docker, and Kubernetes on AWS EKS.

The goal of this project is to automate the entire application delivery process from source code to production deployment without manual intervention.

---

## Project Structure

```
Medical-store/
├── backend/
├── frontend/
├── Dockerfile
├── Jenkinsfile
├── deployment.yml
├── service.yml
├── package.json
├── package-lock.json
├── .gitignore
└── .dockerignore
```

---

## CI/CD Pipeline Flow

The pipeline automates the following steps:

1. Clean workspace in Jenkins  
2. Fetch latest code from GitHub  
3. Install application dependencies  
4. Build Docker image  
5. Push image to Docker Hub  
6. Configure AWS EKS cluster access  
7. Deploy application to Kubernetes cluster  
8. Verify deployment status  

---

## Tech Stack

- Version Control: GitHub  
- CI/CD: Jenkins  
- Containerization: Docker  
- Container Registry: Docker Hub  
- Orchestration: Kubernetes (Amazon EKS)  
- Cloud Provider: AWS  
- Runtime: Node.js  

---

## Deployment Architecture

GitHub → Jenkins → Docker Image → Docker Hub → Amazon EKS → Running Application

---

## Key Features

- Fully automated CI/CD pipeline  
- Docker-based containerization  
- Kubernetes deployment on AWS EKS  
- Secure environment using Kubernetes secrets  
- Automated rollout verification  
- Zero manual deployment process  

---

## What This Project Demonstrates

- End-to-end DevOps pipeline design  
- Jenkins automation skills  
- Docker image creation and management  
- Kubernetes deployment on AWS   
- Real-world CI/CD workflow implementation  

---

