import { useState } from "react";
import Card from "./Card";
import Checkbox from "./Checkbox";
import { MdDeleteForever, MdEdit, MdOutlineCalendarToday } from "react-icons/md";

const Item = ( {todo} ) => {

  return (
      <Card>
        <div className="flex-container">
          <div className="title">{todo.title}</div>
          <div className="btns">
            <MdEdit style={{ color: "#f7cd62", marginRight: ".5rem"}} />
            <MdDeleteForever style={{ color: "#ed844f"}} />
          </div>
        </div>

        <div className="task">{todo.task}</div>
        <div className="flex-container">
          <div className="day">
            <MdOutlineCalendarToday className="calendar"/>
            <p>{todo.day}</p>
          </div>
        </div>
        
        <Checkbox  />
      </Card>
  );
};

export default Item;
// represents one to-do item
// pass prop of todo as argument in Item