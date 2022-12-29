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
import { useEffect, useState } from "react";
import Section from "./components/Section";
import Admin from "./components/Admin";
import AdminPanel from "./components/AdminPanel";
import axios from "axios";
import { Urls } from "./components/urlConstant";

function App() {
  const [theme, setTheme] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const getAllData = async () => {
    setLoading(true)
    try {
      let res = await axios.get(Urls.mainUrl + "/allsitedata")
      setData([...res.data])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alert("error occured")
    }
  }

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <>
      <Router>
        {/* <Navbar theme={theme} setTheme={setTheme} /> */}
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

          <Route path="/" element={<Section data={data} theme={theme} setTheme={setTheme} />} />
          <Route path="/admin" element={<Admin theme={theme} setTheme={setTheme} />} />
          <Route path="/adminpanel" element={<AdminPanel data={data} theme={theme} setTheme={setTheme} />} />
          {/* <Route path="/home" element={<Carousel theme={theme} setTheme={setTheme} />} /> */}
          <Route path="/home" element={<Section data={data} theme={theme} setTheme={setTheme} />} />
          <Route path="/Pictures" element={<PicturesCard theme={theme} setTheme={setTheme} />} />
          <Route path="/Videos" element={<Video data={data} theme={theme} setTheme={setTheme} />} />
          <Route path="/team" element={<Team data={data} />} />
          {/* <Route path="/ghansoli2" element={<Ghansoli2 />} /> */}
          {/* <Route path="/thane" element={<ThaneSlider />} /> */}
          {/* <Route path="/ghansoli4" element={<GhansoliSlider />} /> */}
          {/* <Route path="/ghansoli1" element={<GhansoliSlider1 />} /> */}
          {/* <Route path="/kalamboli" element={<Kalamboli />} /> */}
          {/* <Route path="/kaler" element={<Kaler />} /> */}
          {/* <Route path="/chembur" element={<Chembur />} /> */}
          {/* <Route path="/site1jweller" element={<Site1 />} /> */}
          {/* <Route path='/ongoing' element={<OnGoingSite/>} /> */}

        </Routes>
      </Router>
      {/* <Footer  theme={theme} setTheme={setTheme}/> */}
    </>
  );
}

export default App;
