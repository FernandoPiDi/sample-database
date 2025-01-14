# Sample Database

This is a complete application built with Spring Boot for the backend and React + Next.js for the frontend, using TypeScript for robust and typed development. The backend provides a REST API for managing products, featuring functionalities like adding, listing, and searching for products, with optimized queries using Redis. The frontend consumes this API and displays the data in a list, offering an intuitive user experience. The integration between both layers ensures efficient data flow and a solid architecture for real-world environments.

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

test_lottusse/

├── frontend/           # Frontend application

│   ├── src/

│   │   ├── app/               # Next.js pages and routes

│   │   ├── components/        # Reusable React components

│   │   ├── providers/         # Context providers

│   │   ├── lib/              # Utilities and helper functions

│   │   └── types/            # TypeScript type definitions

│   ├── public/               # Static files

│   ├── .next/               # Next.js build

│   ├── node_modules/        # Dependencies

│   ├── tailwind.config.ts   # Tailwind CSS configuration

│   ├── next.config.js       # Next.js configuration

│   ├── package.json         # Dependencies and scripts

│   ├── tsconfig.json        # TypeScript configuration

│   └── postcss.config.js    # PostCSS configuration

│
├── backend/           # Spring Boot application

│   ├── src/

│   │   ├── main/

│   │   │   ├── java/

│   │   │   │   └── com/lotusse/devtest/

│   │   │   │       ├── config/           # Application configurations and beans

│   │   │   │       ├── controller/       # REST API endpoints

│   │   │   │       ├── dto/              # Data Transfer Objects

│   │   │   │       ├── entity/           # JPA entities/database models

│   │   │   │       ├── exception/        # Custom exceptions and error handlers

│   │   │   │       ├── repository/       # Database access interfaces

│   │   │   │       ├── service/          # Business logic implementation

│   │   │   │       └── DevtestApplication.java  # Main application class

│   │   │   └── resources/                # Application properties and static resources

│   │   └── test/                         # Unit and integration tests

│   ├── .mvn/                            # Maven wrapper directory

│   ├── target/                          # Compiled output

│   ├── .env                            # Environment variables

│   ├── .gitignore                      # Git ignore rules

│   ├── mvnw                            # Maven wrapper script (Unix)

│   ├── mvnw.cmd                        # Maven wrapper script (Windows)

│   ├── pom.xml                         # Project dependencies and build config

│   └── README.md                       # Backend documentation

├── data/              # Persistent data (likely for Docker)

├── .vscode/           # VS Code configuration

├── build/            # Build files

├── .git/             # Git repository

├── .gitignore        # Git configuration

└── README.md         # Main documentation

# Setup

## Set Up Environment Variables

**Backend:** Create a new file named `.env` in the folder backend of your project and add the following content:

- Copy `backend/.env.dist` to `backend/.env`
- Replace the values with your own variables

### Runnig the Frontend

1. To install the dependencies execute
   
```sh
cd frontend
npm install
```

2. Run the project in developer mode

```sh
npm run dev
```

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
