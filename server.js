require('dotenv').config()
const express = require('express');
const dbConnect = require('./database/db');
const bookRoutes = require('./routes/book-routes');

const app = express();
const PORT = process.env.PORT || 3000;

//Connect to Database
dbConnect();

//Middleware
app.use(express.json());

//Routes here
app.use('/api/books', bookRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is starting at port: ${PORT}`);
})
