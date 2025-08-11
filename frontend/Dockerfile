FROM node:23

# Set the working directory
WORKDIR /Leaser/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD ["npx", "vite", "--host"]

# docker build -t frontend Leaser/frontend
# docker run -p 5173:5173 frontend 