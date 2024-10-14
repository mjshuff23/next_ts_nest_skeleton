# Use the official PostgreSQL image as the base image
FROM postgres:15.0

# Expose the PostgreSQL default port
EXPOSE 5432

# Optional: Add any custom scripts, for example, to create tables or seed data
# COPY ./init.sql /docker-entrypoint-initdb.d/
