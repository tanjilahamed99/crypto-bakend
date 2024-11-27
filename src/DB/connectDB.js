const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  console.log("Connecting to database...");
  try {
    const mongoURI = process.env.DATABASE_LOCAL;
    await mongoose.connect(mongoURI, { dbName: "istimatePro" });
    console.log("Successfully connected to database!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
module.exports = connectDB;
