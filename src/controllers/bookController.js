const Book = require('../models/bookModel');

exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('author');
        res.send(books);
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('author');
        if (!book) {
            return res.status(404).send();
        }
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).send();
        }
        res.send(book);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).send();
        }
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
};