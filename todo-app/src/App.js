import './App.css';
import React,{useState} from 'react'

function App() {
  
  const [text,setText] = useState('')

  async function addTask(e){
    var task = document.getElementById("input-text");
    var tasktest = task.value.trim();
    console.log(tasktest);
    if(tasktest !== ""){
        var listitem = document.createElement("li");
        listitem.className = "task-item"


        var taskSpan = document.createElement('span');
        taskSpan.textContent = tasktest;
        taskSpan.className = "task-span"

        var deletebutton = document.createElement('button');
        deletebutton.textContent = "Delete Task";
        deletebutton.onclick = function(){
            listitem.remove();
        }
        deletebutton.className="task-button"

        listitem.appendChild(taskSpan)
        listitem.appendChild(deletebutton);

        var todolist = document.getElementById('todo-list');
        todolist.appendChild(listitem);

        task.value = "";

    }
}

  return (
    <div className="container">
        <h1>Todo App</h1>
        <div className="todo-list-container">
            <ol id="todo-list" className="todo-list"></ol>
        </div>
        <div className="todo-list-input-container">
            <input type="text" id="input-text" placeholder="Add a new task.." onChange={(e)=>{setText(e.target.value)}}/>
            <button className="input-button" onClick= {addTask} > Add Task </button>
        </div>
    </div>
  )
}

export default App;
