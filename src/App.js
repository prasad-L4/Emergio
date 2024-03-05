import "./App.css";
import Footer from "./Components/Footer/Footer";
import Learning from "./Components/Learning/Learning";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Placements from "./Components/Placements/Placements";
import Login from "./Components/Login/Login";
import Hire from "./Components/Hire/Hire";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/learning" element={<Learning />}></Route>
          <Route exact path="/placements" element={<Placements />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/hire" element={<Hire />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
