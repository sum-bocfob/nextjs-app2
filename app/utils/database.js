import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yuritaso0204:v5SyNYM6WQU173BO@cluster0.igurafh.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0");

        console.log("SUCCESS");
    } catch {
        console.log("FAILURE");
        throw new Error();
    }
};

export default connectDB;
