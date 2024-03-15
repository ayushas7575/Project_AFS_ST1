import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'FishHelpDB',
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;