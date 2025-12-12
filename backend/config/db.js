import mongoose from "mongoose";

export const  connectDB = async () =>{
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://ramaelberry_db_user:mFYxFfqEV6d572ZN@version1.9bnnvce.mongodb.net/food-del?appName=version1';
        await mongoose.connect(mongoURI);
        console.log("DB Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.