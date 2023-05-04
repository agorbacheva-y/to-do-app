import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  // to allow routing to main page
  const navigate = useNavigate();

  // check input data against database to see if we can find
  // a user with matching email and password

  const checkUser = (users) => {
    const user = users.find(
      (user) => user.email === email && user.password === password);
      console.log(user)
    if (users) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("All fields are required");
    }

    let user = await axios
      .get("/users")
      .then((res) => checkUser(res.data))
      .catch((error) => {
        console.log(error);
      });

    // if successful login redirect to todo pg
    if (user.email === email && user.password === password) {
      navigate("/todo");

      // set item in localStorage if login successful
      // use item to go to private route, pg where only logged in user can go
      localStorage.setItem("user", JSON.stringify(user.id))
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <form className="form-container">
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
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;

// add error handling if login with email/password not in db