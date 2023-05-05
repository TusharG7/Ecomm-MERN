import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI
        ? process.env.MONGO_URI
        : "mongodb+srv://tusharrgajwani:Tushar1234@ecommmernapp.frp3z6g.mongodb.net/proshop"
    );
    console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
