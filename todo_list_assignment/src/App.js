
import React, { useState } from "react";
import './App.css';

// import TodoList from './components/TodoList';

function App() {

  // const newTaskStateArr = useState("");
  // const newTask = newTaskStateArr[0];
  // const setNewTask = newtaskStateArr[1];
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();

    if (newTask.length===0){
      return;
    }

    const taskItem = {
      text: newTask,
      complete: false
    }

    // the ... takes the array items to the right of the dots and puts them into a new array as listed after comma
    // task item is an object vs a string which it started out as. we created "taskItem" to do this
    setTasks([ ... tasks, taskItem]);
    setNewTask("");
  };

  const handleTaskDelete = (deleteIndex) => {
    // put underscore in front of paramter so you can leave it when it is not being used and not get the warning _task
    const filteredTasks = tasks.filter((task, i) => { 
      return i != deleteIndex});
    setTasks(filteredTasks);
  };

  const handleSwitchComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (index === i) {
        task.complete = !task.complete;
        // to avoid mutating the task directly...
        // const updatedTask = { ... task, complete: !task.complete};
        // return updatedTask;
      }
      return task;
    });

    setTasks(updatedTasks);
  }
  return (
    <div style={{textAlign: "center"}} >
      <form onSubmit={(event) => { handleNewTaskSubmit(event) }} >
        <input type="text" onChange={(event) => { setNewTask(event.target.value) }} value={newTask} />
        <div>
          <button>Add</button>
        </div>
      </form>

    {/* want to map the items to this array to view */}
      { tasks.map((task, i) => {
        
        // what you put in array is how it would initially start. Might start it bold...
        const taskClasses = [];
        if (task.complete){
          taskClasses.push("line-through");
        }


        return (
          // add the key to have the child list item error not shwo
          <div key={i}>
            <input type="checkbox" onChange={(event) => {
              handleSwitchComplete(i)
            }}
              checked={task.complete}/>
            {/* using the class to insert the style object into the html below */}
            <span className={taskClasses.join(" ")}>{task.text}</span>
            <button onClick={(event) => { handleTaskDelete(i)}}>Delete</button>
          </div>
        )
      }) }

    </div>
  );

}

export default App;
