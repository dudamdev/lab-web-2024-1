const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.post('/authors', authorController.createAuthor);
router.delete('/authors/:id', authorController.deleteAuthor);

module.exports = router;
