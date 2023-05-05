import { useState } from "react";

const Item = () => {
  const [ title, setTitle ] = useState("Title");
  const [ task, setTask ] = useState("Task");

  return (
    <div className="todo-card">
      <div className="title">{title}</div>
      <div className="task">{task}</div>
    </div>
  );
};

export default Item;
// represents one to-do
// state for title and state for task