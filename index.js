const express = require('express');
const cors = require('cors');
const { query } = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Hello World i am comming')
});

 const users = [
     {id: 1, name:'Sabana', email:'sabana@gmail.com', phone:'01787041177'},
     {id: 2, name:'Sabina', email:'sabina@gmail.com', phone:'01787041177'},
     {id: 3, name:'Sohana', email:'sohana@gmail.com', phone:'01787041177'},
     {id: 4, name:'Suzana', email:'suzana@gmail.com', phone:'01787041177'},
     {id: 5, name:'Srabonti', email:'srabonti@gmail.com', phone:'01787041177'},
     {id: 6, name:'Sabila', email:'sabila@gmail.com', phone:'01787041177'},
     {id: 7, name:'Sagota', email:'sagota@gmail.com', phone:'01787041177'},
 ]

app.get('/users', (req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }else{
        res.send(users)
    }
});

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, ()=>{
    console.log('listenning to port', port);
});