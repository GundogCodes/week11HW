const ToDo = require('../models/todo')

exports.createItem = async (req,res) =>{
    try {
        const createdTodo = new ToDo.create(req.body)
        await createdTodo.save()
        res.send({createdTodo})

    } catch (error) {
        res.json({message: error.message})
    }
}

exports.getAllItems = async (req,res) =>{
    try {
        const allItems = await ToDo.find({})
        res.json(allItems)
    } catch (error) {
        res.json({message: error.message})
    }
}
