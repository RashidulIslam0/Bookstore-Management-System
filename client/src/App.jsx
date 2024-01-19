import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import 'Routes' in addition to 'Route'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
