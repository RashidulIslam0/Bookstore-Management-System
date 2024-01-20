import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import 'Routes' in addition to 'Route'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Books from "./Components/Books";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import AddStudent from "./Components/AddStudent";
import AddBook from "./Components/AddBook";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
