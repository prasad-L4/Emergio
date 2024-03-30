import "./App.css";
import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/Pages/AboutUs";
import Career from "./Components/Pages/Career";
import Courses from "./Components/Pages/Courses";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Placement from "./Components/Pages/Placement";
import HireFromEmergio from "./Components/Pages/HireFromEmergio";
import Entertainment from "./Components/Pages/Entertainment";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/course" element={<Courses />}></Route>
          <Route exact path="/about" element={<AboutUs />}></Route>
          <Route exact path="/career" element={< Career/>}></Route>
          <Route exact path="/placement" element={< Placement/>}></Route>
          <Route exact path="/hirefrom" element={< HireFromEmergio/>}></Route>
          <Route exact path="/entertainment" element={< Entertainment/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
