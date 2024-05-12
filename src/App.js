import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/account/register?email=amangaur">Register</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/account/register/:email?" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
