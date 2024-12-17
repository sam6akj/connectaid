import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connection successful!");
    }
    catch(err){
        console.error("MongoDB connection failed: ",err.message); 
        process.exit(1);
    }
    
};


connection();