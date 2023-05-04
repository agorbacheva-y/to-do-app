import { Link } from "react-router-dom";

const Navbar = () =>  {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
          <Link to="todo">To Do</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;