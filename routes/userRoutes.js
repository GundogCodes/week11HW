const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todosController')

router.get('/', todoController.home)
router.get('/todos', todoController.getAllItems)
router.post('/todos', todoController.createItem)
router.get('/todos/:id', todoController.getItem)
router.put('/todos/:id', todoController.updateItem)
router.delete('/todos/:id', todoController.deleteItem)

module.exports = router