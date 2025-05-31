//Connect to Database
const mongoose = require('mongoose');
const dbConnect = async () =>{
    try {
        await mongoose.connect(); //Add credentials
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Connection to MongoDB Failed");
        process.exit(1);
    }
}

module.exports = dbConnect;
