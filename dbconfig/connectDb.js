import mongoose from "mongoose";

const connectDatabase = async ()=> {
    try {
        const result = await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database connected');
    } catch (error) {
        console.error(error);
        
    }

}

export default connectDatabase;