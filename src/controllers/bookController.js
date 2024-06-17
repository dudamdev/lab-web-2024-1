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
