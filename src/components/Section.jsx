import { style } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Chembur from './Chembur'
import FirstPageCarousel from './FirstPageCarousel'
import Footer from './Footer'
import GraphForTotalSite from './GraphForTotalSite'
import Introduction from './Introduction'
import Navbar from './Navbar'
import PictureSlider from './PictureSlider'
import styles from "./section.module.css"
const Section = (props) => {
  const navigate = useNavigate()
  return (
    <div className={styles.container1}>
      <section className={styles.one}>
        <Navbar theme={props.theme} setTheme={props.setTheme} />
        {/* <FirstPageCarousel theme={props.theme} setTheme={props.setTheme}/> */}
        {/* <Chembur/> */}
        <div className={styles.headline}>Experience and book a meeting now for your dream home</div>
        {/* <GraphForTotalSite data={props.data} /> */}
        <div className={styles.btngrp}>
          <div onClick={() => navigate("/Pictures")} className={styles.eachbtn}>Photos</div>
          <div onClick={() => navigate("/Videos")} className={styles.eachbtn}>Videos</div>
          <div onClick={() => navigate("/Pictures")} className={styles.eachbtn}>Contact</div>
          <div onClick={() => navigate("/Pictures")} className={styles.eachbtn}>Get Quotation</div>
        </div>
      </section>
      <section className={styles.two}>
        <Introduction />
      </section>
      <section className={styles.three}>
        {/* <Footer theme={props.theme} setTheme={props.setTheme} /> */}
      </section>
    </div>
  )
}

export default Section