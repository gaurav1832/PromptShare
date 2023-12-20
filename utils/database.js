import mongoose from "mongoose";

let isConnected = false;

export const connectToMongoDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "prompt_share",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;

    console.log("MongoDB Connected!");
  } catch (err) {
    console.log(err);
  }
};
