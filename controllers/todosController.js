const ToDo = require('../models/todo')

exports.createItem = async (req,res) =>{
    try {
        const createdTodo =  await ToDo.create(req.body)
        res.json({createdTodo})

    } catch (error) {
        res.json({message: error.message})
    }
}

