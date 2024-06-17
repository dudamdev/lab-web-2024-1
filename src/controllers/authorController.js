const Author = require('../models/authorModel');
const Book = require('../models/bookModel');

exports.createAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).send(author);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteAuthor = async (req, res) => {
    try {
        const books = await Book.find({ author: req.params.id });
        if (books.length > 0) {
            return res.status(400).send({ error: 'Cannot delete author with associated books' });
        }
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) {
            return res.status(404).send();
        }
        res.send(author);
    } catch (error) {
        res.status(500).send(error);
    }
};
