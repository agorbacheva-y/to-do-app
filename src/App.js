import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Fetch from "./Fetch.js";

function App() {
  // check if mounting component for the first time or not
  const firstRender = useRef(true);

  // state to hold input values
  const [ inputValue, setInputValue ] = useState("");

  // state to store to dos
  const [ todo, setTodo ] = useState([]);

  // main function
  const addTodo = (e) => {
    e.preventDefault();

    // .trim() removes whitespace from input and returns new string
    // if input is empty return
    if (inputValue.trim() === "") return;

    // grab all props in todo and add new props, text and id
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

    // remove todo when complete/click delete button

    // QUESTION what does this tell react to do? 
    // delete button onclick gets todo.id of todo that was clicked
    // filter thru todo array, pick out item where
    // todo.id is not equal to id (callback function)
    const removeTodo = (id) => {
      setTodo(todo.filter((todo) => todo.id !== id));
    }

    // useEffect to grab todos from localStorage
    useEffect(() => {
      if (localStorage.getItem("todo") !== null) {
        const newTodo = localStorage.getItem("todo");
        setTodo(JSON.parse([...todo, newTodo]));
      }
    }, []);

    // useEffect to store todos in localStorage
    // if component mounted for first time log true and set firstRender to false
    // else store item todo array in localStorage and log not first pg load 
    useEffect(() => {
      if (firstRender.current) {
        console.log("true");
        firstRender.current = false;
      } else {
        localStorage.setItem("todo", JSON.stringify([...todo]));
        console.log("not the first page load");
      }
    }, [todo]);

  return (
    <div className="container">
      <Fetch />
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
        return (
          <div key={todo.id} className="todo-card">
            <p>{todo.text}</p>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
