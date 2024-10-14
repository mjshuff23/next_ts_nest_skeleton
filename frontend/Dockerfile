# Base stage for both development and production
FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package.json ./
COPY frontend/package*.json ./
COPY frontend/tsconfig.json ./
COPY tsconfig.base.json ../

# Development stage
FROM base AS development
RUN npm install
COPY frontend .

# Production build stage
FROM base AS build
RUN npm ci
COPY frontend .
RUN npm run build

# Production stage
FROM base AS production
RUN npm ci --only=production
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
CMD ["npm", "start"]
