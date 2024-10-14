#!/bin/bash

# Fetch secrets
npm run fetch-secrets

# Set temporary variables for UID and GID
CURRENT_UID=$(id -u)
CURRENT_GID=$(id -g)

# Optional: Write UID and GID to .env file for Docker
echo "UID=${CURRENT_UID}" >> .env
echo "GID=${CURRENT_GID}" >> .env

# Start the Docker containers
docker-compose up --build
