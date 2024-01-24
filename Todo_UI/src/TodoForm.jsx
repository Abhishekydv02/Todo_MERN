import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import axios from 'axios'
function TodoForm({ addTodo }) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim().length === 0) {
            toast.info("Please Fill input", {
                autoClose: 2000,
            });
            return;
        } 
        const newTodo = {
            title: title,
            completed: false,
            id: uuid(),
        };
        // Add the new todo to the server
        axios.post('http://localhost:3001/add', newTodo)
            .then(result => {
                // Update the todo list after adding a new todo
               

                addTodo(newTodo);
                console.log(result);
            })
            .catch(err => console.log(err));
      
        setTitle("");
    }
    
    return (
        <form onSubmit={handleSubmit} className="todoForm">
            <input
                className="todoForm__input"
                type="text"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="todoForm__btn">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
