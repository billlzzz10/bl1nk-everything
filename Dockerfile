# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static website files to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80
