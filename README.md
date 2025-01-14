# Sample Database

This application is a complete solution built with Spring Boot for the backend and React + Next.js for the frontend, leveraging TypeScript for robust and type-safe development. The backend provides a REST API for managing products, including functionalities like adding, listing, and searching for products, with optimized queries powered by Redis. The frontend, designed with a responsive and mobile-friendly interface, consumes this API to display data in an intuitive list format, featuring a dark theme for improved user experience. Both services are integrated to ensure efficient data flow and a solid architecture suited for real-world scenarios. Code quality is maintained through linting for both frontend and backend services, with automated checks implemented via GitHub Actions. Additionally, Docker is used to containerize and run the services, ensuring seamless deployment and scalability.

## Tech stack

### Front End

- NextJS
- React
- TailwindCSS
- Typescript
- Axios
- NodeJS

### Back End

- Spring Boot (Java)
- PostgreSQL
- Redis
- Docker
- Maven
- SpringDoc OpenAPI

## Project Structure

```
test_lottusse/
├── frontend/ # Frontend application
│ ├── src/
│ │ ├── app/ # Next.js pages and routes
│ │ ├── components/ # Reusable React components
│ │ ├── providers/ # Context providers
│ │ ├── lib/ # Utilities and helper functions
│ │ └── types/ # TypeScript type definitions
│ ├── public/ # Static files
│ ├── .next/ # Next.js build
│ ├── node_modules/ # Dependencies
│ ├── tailwind.config.ts # Tailwind CSS configuration
│ ├── next.config.js # Next.js configuration
│ ├── package.json # Dependencies and scripts
│ ├── tsconfig.json # TypeScript configuration
│ └── postcss.config.js # PostCSS configuration
│
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
├── data/ # Persistent data (likely for Docker)
├── .vscode/ # VS Code configuration
├── build/ # Build files
├── .git/ # Git repository
├── .gitignore # Git configuration
└── README.md # Main documentation
```

## Running the entire application

1. Run the following command to start the complete application:

```
docker compose -f ./build/docker-compose.yml up -d --build
```

# Setup

## Set Up Environment Variables

Go to the Readme.md file in the backend and frontend folders and follow the instructions to set up the environment variables.


### Runnig the Frontend

Go to the Readme.md file in the frontend folder and follow the instructions to run the frontend.

### Running the Backend

Go to the Readme.md file in the backend folder and follow the instructions to run the backend.
