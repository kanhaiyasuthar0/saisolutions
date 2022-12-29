import React, { useEffect, useState } from "react";
import styles from "../Assets/common.module.css"
import ImageSide from "./ImageSide";
import i1 from "../Assets/Images/Dingrol/dingrol_cur1.jpg"
import i2 from "../Assets/Images/Dingrol/dingrol_cur2.jpg"
import i3 from "../Assets/Images/Dingrol/dingrol_cur3.jpg"
import i4 from "../Assets/Images/Dingrol/dingrol_cur4.jpg"
import { Urls } from "./urlConstant";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "./Navbar";

function Video(props) {
  const naivgate = useNavigate()

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  let data1 = [
    { img: i1, title: "", featured: "true" },
    { img: i2, title: "" },
    { img: i3, title: "" },
    { img: i4, title: "" },
  ]


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
      {/* <PopUpVideo/> */}
      <Row>
        <Navbar theme={props.theme} setTheme={props.setTheme} />
        {isLoading ? <Loader /> : ""}

        {data?.map((site) => {
          console.log(site.yt_link)
          if (site.yt_link.includes("http")) return (<Col lg={4} sm={12}>
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="300"
                src={site?.yt_link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div >
              <div style={{ textAlign: "center" }}>
                {site.site_name} ({site.site_location})
              </div>
              <div>
                Description : {site.site_description} <span style={{ color: "blue", cursor: "pointer" }} onClick={() => naivgate("/Pictures")}>Photos...</span>
              </div>

              {/* <ImageSide data={data1}/> */}
            </div>
          </Col>)
        })}

      </Row>

      {/* <div className={styles.videoEachBox}>

        <div className="ratio ratio-16x9">
          <iframe
            width="560"
            height="300"
            src="https://www.youtube.com/embed/kQURbofO1i0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div >
        </div>
      </div> */}

      {/* <div className={styles.videoEachBox}>

        <div className="ratio ratio-16x9">
          <iframe
            width="560"
            height="300"
            src="https://www.youtube.com/embed/hUvQEZ8NOKo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

      </div> */}
      {/* <div className={styles.videoEachBox}> */}

      {/* <div className="ratio ratio-16x9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Qjjvg3hC1cY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div> */}

      {/* </div> */}

      {/* <div className={styles.videoEachBox}>

        <div className="ratio ratio-16x9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EKvKmNYF7xU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div> */}
    </>
  );
}

export default Video;
