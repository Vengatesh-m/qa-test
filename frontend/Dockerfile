# Frontend Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container
COPY . .

# Install dependencies
RUN npm install

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the app when the container launches
CMD ["node", "app.js"]

