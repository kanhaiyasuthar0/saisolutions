import { style } from '@mui/system'
import React from 'react'
import Chembur from './Chembur'
import FirstPageCarousel from './FirstPageCarousel'
import Footer from './Footer'
import Introduction from './Introduction'
import Navbar from './Navbar'
import PictureSlider from './PictureSlider'
import styles from "./section.module.css"
const Section = (props) => {
  return (
    <div className={styles.container1}>
      <section className={styles.one}>
        <Navbar theme={props.theme} setTheme={props.setTheme} />
        {/* <FirstPageCarousel theme={props.theme} setTheme={props.setTheme}/> */}
        {/* <Chembur/> */}
        <div className={styles.headline}>Experience and book a meeting now for your dream home</div>
        <div className={styles.btngrp}>
          <div className={styles.eachbtn}>Photos</div>
          <div className={styles.eachbtn}>Videos</div>
          <div className={styles.eachbtn}>Contact</div>
          <div className={styles.eachbtn}>Get Quotation</div>
        </div>
      </section>
      <section className={styles.two}>
        <div className='videoEachBoxMainDiv'>

          <div className={styles.videoEachBox}>

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
              {/* <ImageSide data={data1}/> */}
            </div>
          </div>
          <div className={styles.videoEachBox}>

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
                allow="accelerometer ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                src="https://www.youtube.com/embed/Qjjvg3hC1cY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                width="500"
                height="300"
                src="https://www.youtube.com/embed/EKvKmNYF7xU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div >
              {/* <ImageSide data={data1}/> */}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.three}>
        <Introduction />
        <Footer theme={props.theme} setTheme={props.setTheme} />

      </section>
    </div>
  )
}

export default Section