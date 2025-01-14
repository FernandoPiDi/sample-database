# Sample Database

<img src="docs/Test.png" alt="Application Screenshot" width="800"/>

This application is a complete solution built with Spring Boot for the backend and React + Next.js for the frontend, leveraging TypeScript for robust and type-safe development. The backend provides a REST API for managing products, including functionalities like adding, listing, and searching for products, with optimized queries powered by Redis. The frontend, designed with a responsive and mobile-friendly interface, consumes this API to display data in an intuitive list format, featuring a dark theme for improved user experience. Both services are integrated to ensure efficient data flow and a solid architecture suited for real-world scenarios. Code quality is maintained through linting for both frontend and backend services, with automated checks implemented via GitHub Actions. Additionally, Docker is used to containerize and run the services, ensuring seamless deployment and scalability.

## Tech stack

### Back End

- Spring Boot (Java)
- PostgreSQL
- Redis
- Docker
- Maven
- SpringDoc OpenAPI
- Lombok
- Flyway

## Project Structure

```
test_lottusse/
├── backend/ # Spring Boot application
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/
│ │ │ │ └── com/lotusse/devtest/
│ │ │ │ ├── config/ # Application configurations and beans
│ │ │ │ ├── controller/ # REST API endpoints
│ │ │ │ ├── dto/ # Data Transfer Objects
│ │ │ │ ├── entity/ # JPA entities/database models
│ │ │ │ ├── exception/ # Custom exceptions and error handlers
│ │ │ │ ├── repository/ # Database access interfaces
│ │ │ │ ├── service/ # Business logic implementation
│ │ │ │ └── DevtestApplication.java # Main application class
│ │ │ └── resources/ # Application properties and static resources
│ │ └── test/ # Unit and integration tests
│ ├── .mvn/ # Maven wrapper directory
│ ├── target/ # Compiled output
│ ├── .env # Environment variables
│ ├── .gitignore # Git ignore rules
│ ├── mvnw # Maven wrapper script (Unix)
│ ├── mvnw.cmd # Maven wrapper script (Windows)
│ ├── pom.xml # Project dependencies and build config
│ └── README.md # Backend documentation
```

# Setup

## Set Up Environment Variables

**Backend:** Create a new file named `.env` in the folder backend of your project and add the following content:

- Copy `backend/.env.dist` to `backend/.env`
- Replace the values with your own variables

### Running the Backend

#### Requirements

1. Make sure you have installed:

- Java 17 or higher
- Maven
- Docker

2. Go to the backend directory and install the dependencies:

```sh
cd backend
./mvnw clean install
```

3. Make sure Docker is running and start the PostgreSQL and Redis services:

```sh
cd build
docker-compose up -d
```

4. Then, go to the backend directory and run it with Maven.

```sh
cd ../backend
./mvnw spring-boot:run
```
