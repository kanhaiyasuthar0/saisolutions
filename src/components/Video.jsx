import React from "react";
import styles from "../Assets/common.module.css"
import ImageSide from "./ImageSide";
import i1 from "../Assets/Images/Dingrol/dingrol_cur1.jpg"
import i2 from "../Assets/Images/Dingrol/dingrol_cur2.jpg"
import i3 from "../Assets/Images/Dingrol/dingrol_cur3.jpg"
import i4 from "../Assets/Images/Dingrol/dingrol_cur4.jpg"

function Video() {
let data1 = [
  {img:i1, title:"",featured:"true"},
  {img:i2, title:""},
  {img:i3, title:""},
  {img:i4, title:""},
]


  
  return (
    <>
      {/* <PopUpVideo/> */}
      <div >

      <div className = "ratio ratio-16x9">
        <iframe
          width="560"
          height="300"
          src="https://www.youtube.com/embed/kQURbofO1i0"
          title="YouTube video player"
          frameborder="0"
          allow="ac autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div >
        {/* <ImageSide data={data1}/> */}
      </div>
      </div>

      <div className={styles.videoEachBox}>

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

      </div>
      <div className={styles.videoEachBox}>

      <div className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Qjjvg3hC1cY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          ></iframe>
      </div>
          </div>
    </>
  );
}

export default Video;
