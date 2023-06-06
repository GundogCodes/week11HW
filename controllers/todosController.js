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

exports.getItem = async (req,res) =>{
    try {
        const foundItem = await ToDo.findOne({'_id':req.params.id})
        res.json(foundItem)
    } catch (error) {
        res.json({message: error.message})
    }
}

exports.updateItem = async (req,res)=>{
    try {
        const findItem = await ToDo.findByIdAndUpdate({'_id':req.params.id}, req.body,{new:true})
        .then(()=>{
            res.redirect('/todos')
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

exports.deleteItem = async (req,res)=>{
    try {
        await ToDo.findOneAndDelete({'_id':req.params.id})
        res.send(`Item Deleted`)
    } catch (error) {
        res.json({message: error.message})
    }
}