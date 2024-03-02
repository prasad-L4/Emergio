import "./App.css";
import AboutCards from "./Components/AboutCards/AboutCards";
import ContactSec from "./Components/ContactSec/ContactSec";
import CourseSec from "./Components/CourseSec/CourseSec";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import VideoSec from "./Components/VideoSec/VideoSec";

function App() {
  return (
    <>
      <Navbar />
      <VideoSec />
      <AboutCards />
      <CourseSec />
      <ContactSec/>
      <Footer/>
    </>
  );
}

export default App;
