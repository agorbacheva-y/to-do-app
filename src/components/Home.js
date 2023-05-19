import { useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid";
import todoData from "../data/TodoData.js";
import List from "./List.js";
import Form from "./Form.js";

const Home = () => {
  // state for todo data
  const [ todo, setTodo ] = useState([]);

  // fetch todos in useEffect first time render Home.js
  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    const response = await fetch("/todos");
    const data = await response.json(); // store response in data

    setTodo(data); // store data in state
  }







  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    // set new todo and keep old ones
    setTodo([newTodo, ...todo]);
  }

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete the ToDo?")) {
      // loops thru array and filters out item with id
      setTodo(todo.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="container">
      <Form addTodo={addTodo} />
      <List todo={todo} handleDelete={deleteTodo}/>
    </div>
  );
};

export default Home;

// render List here, pass in prop todo (set data)
// set data and functions here (global state)