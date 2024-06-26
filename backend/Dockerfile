# Backend Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container
COPY . .

# Install dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["node", "server.js"]

