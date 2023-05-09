import Fetch from "./components/Fetch.js";
import Register from "./components/Register.js";
import Navbar from "./components/Navbar.js";
import Todo from "./components/Todo.js";
import Login from "./components/Login.js"
import Home from "./components/Home.js"
import Header from "./components/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/todo" exact element={<Todo />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
