const ToDo = require('../models/todo')


exports.createItem = async (req,res) =>{
    try {
        const createdTodo = new ToDo(req.body)
        await createdTodo.save()
        res.json({createdTodo})

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
        if(!foundItem) {
            res.send('Todo does not exist')
        }else{

            res.json(foundItem)
        }
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
        const foundToDo =  await ToDo.findOneAndDelete({'_id':req.params.id})
        if(!foundToDo){
            res.send('Item Not Found')
        } else{

            res.send(`${foundToDo.title} Deleted`)
        }
    } catch (error) {
        res.json({message: error.message})
    }
}