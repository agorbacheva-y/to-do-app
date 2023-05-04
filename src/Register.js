import { useState } from "react";
import axios from "axios";
import Card from "./Card.js";

const Register = () => {
const [ username, setUsername ] = useState("");
const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");

// ensure email can only be registered once
// helper function used in submit function to check if email is already registered
const checkEmail = (users) => {
  const user = users.find((user) => user.email === email);
  if (users) return user;
};

 // what happens when click register button
const handleSubmit = async (e) => {
  e.preventDefault();
  const user = await axios
  .get("/users") // get users from database (request)
  .then((res) => checkEmail(res.data)); // and check from results if email already exists

  if (user) {
    alert("User already exists"); // if email already exists, alert
  } else {
    const user = {username, email, password}; //else create new user to database
    axios.post("/users", user)
    .then(alert("New user created")); // save new user and alert
  }
};

  return (
    <div className="container">
      <Card>
        <form className="form-container" onSubmit={handleSubmit}>
          <h1>Register User</h1>
          <label>
            <input 
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            <input 
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <input 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button 
            className="btn"
            type="submit"
          >
            <p>Register</p>
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;