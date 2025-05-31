const { json } = require('express');
const Book = require('../models/book');

const getAllBooks = async(req,res) =>{
    try {
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(200).json({
            success: true,
            message: "List of Books fetched successfully",
            data: allBooks
          }) 
        } else{
            res.status(404).json({
                message: "Books not found"
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const getBook = async(req,res) =>{
    try {
        const getCurrentBookId = req.params.id;
        const bookbyId = await Book.findById(getCurrentBookId);
        if(!bookbyId){
            return res.status(404).json({
                success: false,
                message: 'Book with the current ID not found, please try again with a valid ID'
            });
        } else{
            res.status(200).json({
                success: true,
                data : bookbyId
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const addBook = async(req,res) =>{
    try {
        const newFormData = req.body;
        const newlyCreatedBook = await Book.create(newFormData);
        if(newFormData){
            res.status(201).json({
                success: true,
                message: 'Book added to database',
                data: newlyCreatedBook
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const updateBook = async(req,res) =>{
    try {
        const updatedData = req.body;
        const getCurrentBookId = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(getCurrentBookId, updatedData, {
            new: true,
        });
       if(!updatedBook){
            res.status(404).json({
                success: false,
                message: 'No book found with the given ID, please try with a valid ID'
            })
        } else{
            res.status(200).json({
                success: true,
                message: "The book has been updated",
                data: updatedBook
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}

const deleteBook = async(req,res) =>{
    try {
        const getCurrentBookId = req.params.id;
        const deleteById = await Book.findByIdAndDelete(getCurrentBookId);
        if(!deleteById){
            res.status(404).json({
                success: false,
                message: 'No book found with the given ID, please try with a valid ID'
            })
        } else{
            res.status(200).json({
                success: true,
                message: "The book has been deleted",
                data: deleteById
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    getAllBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
}