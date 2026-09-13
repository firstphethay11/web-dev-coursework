import mongoose from "mongoose";
import dotenv from "dotenv"; 

dotenv.config(); 

mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

export default mongoose;

