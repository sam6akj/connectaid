# ConnectAid
A Donation platform that connects donors to people in need. Created using MERN Stack.

## Prerequisites

  - Node
  - npm
  - MongoDB Atlas Account

## Get Started

1. Clone the Repository

   ```sh
    git clone https://github.com/rafayhanan/ConnectAid.git
    ```

2. Install Dependencies
   
    ```sh
    cd front-end
    npm install
    ```

    ```sh
    cd ..
    cd back-end
    npm install
    ```
    
## MongoDB Connection

1. Create a clustor on MongoDB Atlas

2. Create .env file in **back-end** directory
   
    ```sh
    MONGODB_URI = mongodb+srv://<username>:<password>@<cluster-name>.bqydw.mongodb.net/?retryWrites=true&w=majority&appName=<clustor-name>
    JWT_SECRET = <your-secret-key>
    ```

## Running the Project

### back-end

  ```sh
    cd back-end
    node server.js
  ```
### front-end

  ```sh
    cd front-end
    npm start
  ```










