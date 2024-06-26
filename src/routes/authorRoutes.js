const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.post('/authors', authorController.createAuthor);
router.get('/authors', authorController.getAllAuthors);
router.get('/authors/:id', authorController.getAuthorById);
router.put('/authors/:id', authorController.updateAuthor);
router.delete('/authors/:id', authorController.deleteAuthor);

module.exports = router;
