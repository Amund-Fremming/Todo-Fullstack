# Use an official Node.js runtime as the base image
FROM node:18.12.2

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production-ready application
RUN npm run build

# Expose the port your app runs on (e.g., 3000)
EXPOSE 5173

# Define the command to run your application
CMD ["npm", "start"]