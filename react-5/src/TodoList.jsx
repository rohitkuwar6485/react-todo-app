import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todo,setTodo] = useState([{task:"Sample Task", id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodo((prevTodo)=>{
            return [...prevTodo,{task:newTodo,id:uuidv4(),isDone:false}];
        });
        setNewTodo("");
    };

    let updateValue = (event) => {
        setNewTodo(event.target.value);
    };
    
    let deleteTodo = (id) =>{
        setTodo((prevTodos) => todo.filter((prevTodos)=> prevTodos.id != id));
    };

    let markAllDone = () =>{
        setTodo((prevTodo)=>(
            prevTodo.map((todo)=>{
                return{
                    ...todo,
                    isDone:true,                    
                };
            })
        ));
    };

    let markAsDone = (id) =>{
        setTodo((prevTodo)=>(
            prevTodo.map((todo)=>{
                if(todo.id === id){
                    return{
                        ...todo,
                        isDone:true,                    
                    };
                }else{
                    return todo;
                }
            })
        ));
    };


    return(
        <div className="todo-container">
            <input placeholder="Add a Task" value={newTodo} onChange={updateValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Task Todo</h4>
            <ul>
                {
                    todo.map((todo)=>(
                        <li key={todo.id}>
                            <span className={todo.isDone ? "done" : ""}>{todo.task}</span>
                            <div className="task-buttons">
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                            </div>

                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button className="footer-button" onClick={markAllDone}>Mark All as Done</button>
        </div>
    );
}