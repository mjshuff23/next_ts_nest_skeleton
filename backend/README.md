# Next.js & NestJS Monorepo Skeleton

This project is a monorepo boilerplate using Next.js for the frontend and NestJS for the backend. The backend is connected to a PostgreSQL database using TypeORM, and the frontend uses React with TypeScript.

## Features

- Full-stack application using a monorepo structure.
- Backend built with NestJS and PostgreSQL.
- Frontend built with Next.js and React.
- TypeORM for database interaction.
- Preconfigured ESLint and Prettier for consistent code formatting.
- Jest for unit testing.

## Project Setup

- Clone the repository:

```bash
git clone <repo-url>
```

- Install dependencies for both frontend and backend:

```bash
npm install
```

### Running the Project

#### Development

To build and run the application in development mode:

```bash
npm run dev
```

#### Production

To build and run the application in production mode:

```bash
npm run build
npm start
```

#### Running in Docker

The project is preconfigured with Docker for easy setup. To run the project using Docker:

```bash
docker-compose up --build
```

#### Testing

##### Unit Tests**

To run unit tests:

```bash
npm run test
```

##### End-to-End Tests**

To run end-to-end tests:

```bash
npm run test:e2e
```

## License

This project is licensed under the MIT License.
