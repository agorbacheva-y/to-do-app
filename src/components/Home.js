import { useState } from "react";
import todoData from "../data/TodoData.js";
import List from "./List.js";
import Form from "./Form.js";
import {v4 as uuidv4} from "uuid";

const Home = () => {
  // state for todo data
  const [ todo, setTodo ] = useState(todoData);

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    // set new todo and keep old ones
    setTodo([newTodo, ...todo]);
  }

  return (
    <div className="container">
      <Form addTodo={addTodo} />
      <List todo={todo} />
    </div>
  );
};

export default Home;

// render List here, pass in prop todo (set data)