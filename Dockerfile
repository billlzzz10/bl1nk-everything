# Multi-stage build: Build CSS with Node, then serve with Nginx
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tailwind.config.js ./

# Install dependencies
RUN npm ci

# Copy source files
COPY src/ ./src/

# Build Tailwind CSS
RUN npm run build:css

# Production stage: Serve with Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/src/*.html /usr/share/nginx/html/
COPY --from=builder /app/src/output.css /usr/share/nginx/html/

# Expose port 80 for the web server
EXPOSE 80
