const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String},
    completed:{type:Boolean, default:false},
    created_at:{type:Date, default:Date.now()}

})

const ToDo = mongoose.model('todo',todoSchema)

module.exports  = ToDo