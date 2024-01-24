const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')


const app = express();
app.use(cors())
app.use(express.json());


 mongoose.connect('mongodb://127.0.0.1:27017/TODO')

app.post('/add', (req,res)=>{
    const title = req.body.title;
    const id = req.body.id;
    TodoModel.create({
        id2:id,
        title:title
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id',(req,res)=>{
       const {id} = req.params;
       const {completed}=req.body;
       console.log(id);
       TodoModel.findOneAndUpdate({id2:id},{completed:!completed})
       .then(result => res.json(result))
       .catch(err => res.json(err))

})

app.delete('/delete/:id', (req,res)=>{
    const {id} = req.params;
    console.log(id);
    TodoModel.findOneAndDelete({id2:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.listen(3001,()=>{

    console.log("Server is Running");
})