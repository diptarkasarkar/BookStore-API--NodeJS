//Connect to Database
const mongoose = require('mongoose');
const dbConnect = async () =>{
    try {
        await mongoose.connect('mongodb+srv://2230022:Diptarka%402004@cluster0.zxvqtqi.mongodb.net/');
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Connection to MongoDB Failed");
        process.exit(1);
    }
}

module.exports = dbConnect;