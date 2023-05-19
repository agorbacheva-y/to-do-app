import Card from "./Card";
import Button from "./Button";
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [ title, setTitle ] = useState("");
  const [ task, setTask ] = useState("");
  const [ day, setDay ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      task,
      day
    }

    addTodo(newTodo);
    console.log(newTodo);
    setTitle("");
    setTask("");
    setDay("");
  }

  return (
    <Card create={true}>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h1>Add a new Todo</h1>
            <label>
              <p>Title</p>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>

            <label>
              <p>Task</p>
              <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            </label>

            <label>
              <p>Day</p>
              <select value={day} onChange={(e) => setDay(e.target.value)} >
                <option value="" disabled={true}>Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </label>
          <Button type="submit">
            <p>Add Todo</p>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;