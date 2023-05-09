import Card from "./Card";
import Button from "./Button";
import { useState } from "react";

const Form = () => {
  return (
    <Card create={true}>
      <form>
        <div className="form-container">
          <h1>Add a new Todo</h1>
            <label>
              <p>Title</p>
              <input type="text" />
            </label>

            <label>
              <p>Task</p>
              <input type="text" />
            </label>

            <label>
              <p>Day</p>
              <select>
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