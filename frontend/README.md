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

## Frontend Structure

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
