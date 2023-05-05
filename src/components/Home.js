import { useState } from "react";
import todoData from "../data/TodoData.js";
import List from "./List.js";

const Home = () => {
  // state for todo data
  const [ todo, setTodo ] = useState(todoData);

  return (
    <div className="container">
      <List todo={todo} />
    </div>
  );
};

export default Home;

// render List here, pass in prop todo (set data)