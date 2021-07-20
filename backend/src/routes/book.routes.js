const express = require('express')
const router = express.Router()
const bookController =  require('../controllers/book.controller');

// Retrive all books
router.get('/', bookController.findAll);

// Create a new book
router.post('/', bookController.create);

module.exports = router;