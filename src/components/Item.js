import { useState } from "react";
import Card from "./Card";
import Checkbox from "./Checkbox";
import { MdDeleteForever, MdEdit, MdOutlineCalendarToday } from "react-icons/md";

const Item = ({ todo, handleDelete, editTodo }) => {
  const [ done, setDone ] = useState(todo.done);

  const handleChange = (e) => {
    setDone(e.target.checked);
  }

  return (
    <Card>
      <div className="card-container">
        <div className="flex-container">
          <div className="title">{todo.title}</div>
          <div className="btns">
            <MdEdit style={{ color: "#f7cd62", marginRight: ".5rem"}} onClick={() => editTodo(todo)} />
            <MdDeleteForever style={{ color: "#ed844f"}} onClick={() => handleDelete} />
          </div>
        </div>

        <div className="task">{todo.task}</div>

        <div className="flex-container">
          <div className="day">
            <MdOutlineCalendarToday className="calendar"/>
            <p>{todo.day}</p>
          </div>

          <Checkbox  
            // checking done prop in todo.done
            label={done === true ? "Done" : "Doing"}
            value={done}
            // click to change value
            onChange={handleChange}
          />
        </div>
      </div>
    </Card>
  );
};

export default Item;
// represents one to-do item
// pass prop of todo as argument in Item
// Checkbox is rendered in Item, set props in Checkbox here