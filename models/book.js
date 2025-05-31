const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, 'Book title is required'],
        trim : true,
        maxLength : [100, 'Book Tite cant be more thhan 100 charecters']
    },
    author: {
        type: String,
        required : [true, 'Author name is required'],
        trim : true,
    },
    year: {
        type : Number,
        required : [true, 'publication year required'],
        min : [1000, 'Year must be atleast 1000'],
        max : [new Date().getFullYear(), 'Year cant be in the future'],
    },
    createdAt: {
        type : Date,
        default : Date.now,
    }
})

module.exports = mongoose.model('Book', bookSchema);