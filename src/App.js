import Fetch from "./Fetch.js";
import Register from "./Register.js";
import Navbar from "./Navbar.js";
import Todo from "./Todo.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Fetch /> 

      <Routes>
        <Route path="/register" exact element={<Register />} />
        <Route path="/todo" exact element={<Todo />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
