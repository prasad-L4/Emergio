import "./App.css";
import Footer from "./Components/Footer/Footer";
import Learning from "./Components/Learning/Learning";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";




function App() {
  return (
    <>
   <Router>
      <Navbar/>
  
      <Routes>
        <Route exact path='/' element={ <Home/>}>

 
    </Route>
    <Route exact path='/learning' element={ <Learning/>}>

 
    </Route>
  
    

    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
