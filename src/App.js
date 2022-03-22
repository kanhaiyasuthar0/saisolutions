import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import PicturesCard from "./components/PicturesCard";


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
          
        </Routes >
        

      </Router>
      
    </>
  );
}

export default App;
