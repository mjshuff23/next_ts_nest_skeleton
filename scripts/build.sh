#!/bin/bash

echo "Fetching secrets from Infisical..."
node ./infisical/fetchSecrets.mjs

if [ -f .env ]; then
    echo ".env file successfully generated"
else
    echo "Failed to generate .env file, aborting build"
    exit 1
fi

echo "Running Docker Compose..."
docker-compose up --build
