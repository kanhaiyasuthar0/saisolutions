import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import PicturesCard from "./components/PicturesCard";
import OnGoingSite from "./components/OnGoingSite";


function App() {
  
  return (
    <>
      <Router>

        <Navbar />
          {/* <Counter/> */}

        <Routes >
          {/* <Route path="/home"> */}
            {/* <About /> */}
            {/* {console.log("home")} */}
            {/* <Video/> */}
          {/* </Route> */}
          {/* <Route path="/gallery"> */}
            {/* <Users /> */}
            {/* {console.log("gall")} */}
          {/* </Route> */}

          <Route path='/' element={<Carousel/>} />
          <Route path='/home' element={<Carousel/>} />
          <Route path='/Pictures' element={<PicturesCard/>} />
          <Route path='/Videos' element={<Video/>} />
          {/* <Route path='/ongoing' element={<OnGoingSite/>} /> */}
          
        </Routes >
        

      </Router>
      
    </>
  );
}

export default App;
