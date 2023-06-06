require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT ||3000
const app = require('./app')

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.once('open',() =>{
    console.log('connected to MongoDB')
})

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})