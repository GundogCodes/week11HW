const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todosController')

router.get('/', todoController.home) //t
router.get('/todos', todoController.getAllItems)
router.post('/todos', todoController.createItem)//t
router.get('/todos/:id', todoController.getItem)//t
router.put('/todos/:id', todoController.updateItem)//t
router.delete('/todos/:id', todoController.deleteItem)//t

module.exports = router