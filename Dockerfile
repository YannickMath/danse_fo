## Use the official image as a base
FROM node:latest

## Create a directory to hold the application code inside the image
WORKDIR /app

## Copy the package.json file to the working directory
COPY package.json .

## Install the dependencies
RUN npm install

## Copy the build directory to the working directory
COPY . .

## Build the app ? : https:##create-react-app.dev/docs/deployment/#docker
RUN npm run build

## Install serve to run the build ? : https:##create-react-app.dev/docs/deployment/#static-server
RUN npm install -g serve


## Expose the port the app runs on
EXPOSE 3000

## Serve the app
CMD ["serve", "-s", "build", "-l", "3000"]
