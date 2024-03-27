import "./App.css";
import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";
import Courses from "./Components/Pages/Courses";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/course" element={<Courses />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
