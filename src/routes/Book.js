const express = require('express');
var router = express.Router();

const bookController = require('../app/controller/BookController');

router.post('/saveBook', bookController.CreateBook)
router.put('/bookUpdate/:id' , bookController.EditBookById)
router.get('/bookInfo/:id', bookController.getBookById)
router.get('/bookAll' , bookController.getAllBook)
router.delete('/bookDelete/:id' , bookController.deleteBookById)
router.delete('/bookDeleteForever/:id' , bookController.deleteBookByIdForever)
router.use('/', bookController.getHelloWorld)

module.exports = router;