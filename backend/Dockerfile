# Base stage for both development and production
FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package.json ./
COPY backend/package*.json ./
COPY tsconfig.base.json ../
COPY backend/tsconfig.json ./

# Development stage
FROM base AS development
RUN npm install
COPY backend .
RUN npm run build
ENV DOCKER=true

# Production build stage
FROM base AS build
RUN npm ci
COPY backend .
RUN npm run build

# Production stage
FROM base AS production
ENV DOCKER=true
RUN npm ci --only=production
COPY --from=build /usr/src/app/dist ./dist
CMD ["npm", "run", "start:prod"]
