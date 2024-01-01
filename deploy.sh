#!/bin/bash

# Define variables
APP_DIR="/home/daniils/website"

# Navigate to the Vue.js app directory
echo "ℹ️ Changing directory to $APP_DIR"
cd $APP_DIR

# Pull the latest changes from your GitHub repository
echo "ℹ️ Pulling the latest changes from the repository"
git pull origin main

# Install or update dependencies
echo "ℹ️ Installing or updating dependencies"
yarn install

# Build the Vue.js app
echo "ℹ️ Building the Vue.js app"
yarn build

# Copy the built files to the Nginx directory
echo "ℹ️ Copying built files to Nginx directory (/var/www/firger.net)"
sudo cp -r dist/* /var/www/firger.net

# Restart Nginx to apply changes
echo "ℹ️ Restarting Nginx to apply changes"
sudo nginx -s reload

echo "✅ Deployment completed successfully!"