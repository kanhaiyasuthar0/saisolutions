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
import Ghansoli2 from "./components/Ghansoli2";
import Chembur from "./components/Chembur";
import Kalamboli from "./components/Kalamboli";
import Kaler from "./components/Kaler";
import Site1 from "./components/Site1";
import Team from "./components/Team";

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
          <Route path="/team" element={<Team />} />
          <Route path="/ghansoli2" element={<Ghansoli2 />} />
          <Route path="/thane" element={<ThaneSlider />} />
          <Route path="/ghansoli4" element={<GhansoliSlider />} />
          <Route path="/ghansoli1" element={<GhansoliSlider1 />} />
          <Route path="/kalamboli" element={<Kalamboli/>} />
          <Route path="/kaler" element={<Kaler />} />
          <Route path="/chembur" element={<Chembur />} />
          <Route path="/site1jweller" element={<Site1 />} />
          {/* <Route path='/ongoing' element={<OnGoingSite/>} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
