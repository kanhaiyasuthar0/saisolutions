import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PicturesCard from "./components/PicturesCard";
import OnGoingSite from "./components/OnGoingSite";
import GhansoliSlider1 from "./components/GhansoliSlider1";
import GhansoliSlider from "./components/GhansoliSlider";
import ThaneSlider from "./components/ThaneSlider";
import PictureSlider from "./components/PictureSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Counter/> */}

        <Routes>
          {/* <Route path="/home"> */}
          {/* <About /> */}
          {/* {console.log("home")} */}
          {/* <Video/> */}
          {/* </Route> */}
          {/* <Route path="/gallery"> */}
          {/* <Users /> */}
          {/* {console.log("gall")} */}
          {/* </Route> */}

          <Route path="/" element={<Carousel />} />
          <Route path="/home" element={<Carousel />} />
          <Route path="/Pictures" element={<PicturesCard />} />
          <Route path="/Videos" element={<Video />} />
          <Route path="/ghansoli2" element={<PictureSlider />} />
          <Route path="/thane" element={<ThaneSlider />} />
          <Route path="/ghansoli4" element={<GhansoliSlider />} />
          <Route path="/ghansoli1" element={<GhansoliSlider1 />} />
          {/* <Route path='/ongoing' element={<OnGoingSite/>} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
