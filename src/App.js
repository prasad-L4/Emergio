import "./App.css";
import AboutCards from "./Components/AboutCards/AboutCards";
import CourseSec from "./Components/CourseSec/CourseSec";
import Navbar from "./Components/Navbar/Navbar";
import VideoSec from "./Components/VideoSec/VideoSec";

function App() {
  return (
    <>
      <Navbar />
      <VideoSec />
      <AboutCards />
      <CourseSec />
    </>
  );
}

export default App;
