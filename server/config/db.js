//MongoDB Connection
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (e) {
    console.error(e);
  }
};

module.exports = connectDB;
