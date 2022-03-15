import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";

function App() {
  // console.log(Switch)
  return (
    <>
      <Router>

        <Navbar />

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
          <Route path='/gallery' element={<Video/>} />
          
        </Routes >
        

      </Router>
      
    </>
  );
}

export default App;
