const request = require('supertest')
const mongoose = require('mongoose')
const {MongoMemoryServer} = require('mongodb-memory-server')
const app = require('../app')
const server = app.listen(8080, ()=>{console.log('Testing on 8080')})
const ToDo = require('../models/todo')
let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true })
  })

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
  })



describe('Test all user endpoints', ()=>{
    
    test('create a new todo', async ()=>{
        const response = await request(app)
        .post('/users/todos')
        .send({title:'testTitle', description:'testDescription',completed:true})

        expect(response.body.createdTodo.title).toEqual('testTitle')
        expect(response.body.createdTodo.description).toEqual('testDescription')
        expect(response.body.createdTodo.completed).toEqual(true)
        expect(response.statusCode).toBe(200)
        expect(response.body.createdTodo).toHaveProperty('created_at')
    })
    test('should get a specific todo based on id', async ()=>{
        const newTodo = new ToDo({title:'testTitle', description:'testDescription',completed:true})
        await newTodo.save()
        
        const response =  await request(app)
        .get(`/users/todos/${newTodo._id}`)

        expect(response.body.title).toEqual('testTitle')
        expect(response.body.description).toEqual('testDescription')
        expect(response.body.completed).toEqual(true)
        expect(response.body).toHaveProperty('created_at')
    })
    test(' update a specific todo',async ()=>{
        const aTodo = new ToDo({title:'testTitle', description:'testDescription',completed:true})
        await aTodo.save()
        
        const response = await request(app)
        .put(`/users/todos/${aTodo._id}`)
        .send({title:'testUpdatedTitle', description:'testUpdatedDescription',completed:false})
        expect(response.body.findItem.title).toEqual('testUpdatedTitle')
        expect(response.body.findItem.description).toEqual('testUpdatedDescription')
        expect(response.body.findItem.completed).toEqual(false)
        expect(response.body.findItem).toHaveProperty('created_at')
        expect(response.body.findItem).toHaveProperty('_id')
    })
    test('delete a specific todo ', async ()=>{
        const aTodo = new ToDo({title:'testTitle', description:'testDescription',completed:true})
        await aTodo.save()

        const response = await request(app)
        .delete(`/users/todos/${aTodo._id}`)
        expect(response.text).toEqual(`${aTodo.title} Deleted`)
        if(!aTodo){
            expect(response.text).toEqual(`Item Not Found`)
        }
    })
    
    test('get all todos', async ()=>{
        const todo1 = new ToDo({title:'testTitle1',description:'testDescription1',completed:false})
        const todo2 = new ToDo({title:'testTitle2',description:'testDescription2',completed:true})
        const todo3 = new ToDo({title:'testTitle3',description:'testDescription3',completed:false})
        await todo1.save()
        await todo2.save()
        await todo3.save()

        const response = await request(app)
        .get('/users/todos')
        console.log('response length',response.length)
        expect(response.body[0].title).toEqual('testTitle')
        expect(response.body[0].description).toEqual('testDescription')
        expect(response.body[0].completed).toEqual(true)
        expect(response.body[0]).toHaveProperty('_id')
        
        expect(response.body[1].title).toEqual('testTitle')
        expect(response.body[1].description).toEqual('testDescription')
        expect(response.body[1].completed).toEqual(true)
        expect(response.body[1]).toHaveProperty('_id')
        
        expect(response.body[2].title).toEqual('testUpdatedTitle')
        expect(response.body[2].description).toEqual('testUpdatedDescription')
        expect(response.body[2].completed).toEqual(false)
        expect(response.body[2]).toHaveProperty('_id')

        expect(response.body[3].title).toEqual('testTitle1')
        expect(response.body[3].description).toEqual('testDescription1')
        expect(response.body[3].completed).toEqual(false)
        expect(response.body[3]).toHaveProperty('_id')

        expect(response.body[4].title).toEqual('testTitle2')
        expect(response.body[4].description).toEqual('testDescription2')
        expect(response.body[4].completed).toEqual(true)
        expect(response.body[4]).toHaveProperty('_id')
        
        expect(response.body[5].title).toEqual('testTitle3')
        expect(response.body[5].description).toEqual('testDescription3')
        expect(response.body[5].completed).toEqual(false)
        expect(response.body[5]).toHaveProperty('_id')
        
    })
    
   
})




