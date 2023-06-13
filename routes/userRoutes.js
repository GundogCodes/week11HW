const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todosController')

router.get('/todos', todoController.getAllItems)//tested
router.post('/todos', todoController.createItem)//tested
router.get('/todos/:id', todoController.getItem)//tested
router.put('/todos/:id', todoController.updateItem)//tested
router.delete('/todos/:id', todoController.deleteItem)//tested

module.exports = router