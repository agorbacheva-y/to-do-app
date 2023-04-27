import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  // check if mounting component for the first time or not
  const firstRender = useRef(true);

  // state to hold input values
  const [ inputValue, setInputValue ] = useState("");

  // state to store to dos
  const [ todo, setTodo ] = useState([]);

  // function for onSubmit
  const addTodo = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    // grab all props in todo from before and add new props
    // add unique id because items will be added and removed
    setTodo([
      ...todo,
      {
        text: inputValue,
        id: uuidv4(),
      }
    ]);

    // clear input after values stored
    setInputValue("");
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <form onSubmit={addTodo}>
        <input 
            autoFocus
            type="text"
            placeholder="Add a To Do"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add To Do</button>
      </form>

      {todo.map((todo) => {
        <div key={todo.id} className="todo-card">
          <p>{todo.text}</p>
          <button>Delete</button>
        </div>
      })}
    </div>
  );
}

export default App;
