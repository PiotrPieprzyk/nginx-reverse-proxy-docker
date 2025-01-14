# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./src ./src

# Expose the port the app runs on
EXPOSE 3000

# Start the Express application
CMD ["npm", "run", "serve"]
