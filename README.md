# Local Environment Setup

Follow these steps to set up the local environment for the location validator app:

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Step 1: Make a Fork and Clone the repository

Make a fork and Clone the location validator repository to your local machine using Git:

```  console 
   git clone git@github.com:<username>/Location-Validator.git
```
   
   

## Step 2: Install dependencies

Navigate to the project directory and install the required Node.js packages for both frontend and backend


``` console
    cd backend
    npm install
    
```
    
    
    
 ``` console
    cd frontend
    npm install
    
 ```
    
    
## Step 4 : Setup .env file :

Add a .env file having a variable Mongo_URI of your database.

## Step 5: Start the app

Start the location validator app by running the following command:


``` console
    npm start
 ````
  
  
Do this for both <b>backend</b> and <b>frontend</b> directories.

## Troubleshooting

If you encounter any issues setting up the local environment, please check the following:

- Make sure that you have installed the required software (Node.js and MongoDB) and that they are up to date.
- Make sure that the MongoDB server is running. If you see an error message saying "connection failed," try running the `mongod` command again.
- If you are having issues installing the Node.js packages, try deleting the `node_modules` directory and running `npm install` again.
