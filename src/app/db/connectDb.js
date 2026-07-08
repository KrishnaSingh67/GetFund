import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const uri = process.env.MONGODB_URI || 'mongodb+srv://sudhanshu1857kai_db_user:<90057>@chai.iridp3z.mongodb.net/?appName=chai';
        const conn = await mongoose.connect(uri);

        console.log(`MongoDB Connected: ${conn.connection.host}`);

        return conn;
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDb;