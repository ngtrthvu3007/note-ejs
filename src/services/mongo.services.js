const mongoose = require("mongoose");

const databaseConnection = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connect Db success!");
    })
    .catch((error) => {
      console.log("Error in Database Service: ", error);
    });
};

module.exports = databaseConnection;
