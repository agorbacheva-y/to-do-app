import { useState } from "react";

const Item = ( {todo} ) => {

  return (
    <div className="todo-card">
      <div className="title">{todo.title}</div>
      <div className="task">{todo.task}</div>
    </div>
  );
};

export default Item;
// represents one to-do item
// pass prop of todo as argument in Item