import { useState } from "react";
import Card from "./Card";

const Item = ( {todo} ) => {

  return (
    <Card reverse={true}>
      <div className="title">{todo.title}</div>
      <div className="task">{todo.task}</div>
    </Card>
  );
};

export default Item;
// represents one to-do item
// pass prop of todo as argument in Item