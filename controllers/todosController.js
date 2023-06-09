const ToDo = require('../models/todo')

exports.home = (req,res) =>{
    
    res.send('<h1>Hello World</h1>')
}

exports.createItem = async (req,res) =>{
    try {
        const createdTodo = new ToDo(req.body)
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
        res.json({findItem})
        
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