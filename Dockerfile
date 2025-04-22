# Use an official Node runtime as a parent image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code to the container
COPY . .

# Build the application (if necessary, can also run dev here depending on use case)
RUN npm run build

# Expose the port that your app will run on
EXPOSE 1000

# Command to run the app in production mode
CMD ["npm", "run", "preview"]
