const mongoose =  require('mongoose')

const TodoSchema = new mongoose.Schema({
    id2:String,
    title:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const TodoModel = mongoose.model("todos", TodoSchema)

module.exports = TodoModel