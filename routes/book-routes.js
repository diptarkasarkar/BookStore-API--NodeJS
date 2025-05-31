const { getAllBooks, getBook, addBook, updateBook, deleteBook } = require("../controllers/book-controller");

const express = require('express');

//create express router
const router = express.Router()

//all the routes that are related to books
router.get('/get', getAllBooks);
router.get('/get/:id', getBook);
router.post('/add', addBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;