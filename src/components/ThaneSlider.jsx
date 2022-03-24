

import React from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BrowserRouter as Router, Routes , Route , Link } from "react-router-dom";
const ThaneSlider = () => {
     let data = [
        `https://i.ibb.co/LCqZJLS/IMG-20210228-WA0001.jpg`,
        `https://i.ibb.co/z2HPsSN/IMG-20210228-WA0002.jpg`,
        `https://i.ibb.co/hYLd0CQ/IMG-20210228-WA0003.jpg`,
        `https://i.ibb.co/QfHTtbT/IMG-20210228-WA0004.jpg`,
        `https://i.ibb.co/Y77NS7P/IMG-20210228-WA0005.jpg`,
        `https://i.ibb.co/Nmky4ZN/IMG-20210228-WA0006.jpg`,
        `https://i.ibb.co/Lr853hH/IMG-20210228-WA0007.jpg`,
        `https://i.ibb.co/VtbxKr8/IMG-20210228-WA0008.jpg`,
        `https://i.ibb.co/Lkdc7X5/IMG-20210228-WA0009.jpg`,
        `https://i.ibb.co/RBFVGd4/IMG-20210228-WA0010.jpg`,
        `https://i.ibb.co/hc96CS4/IMG-20210228-WA0011.jpg`,
        `https://i.ibb.co/TrwzV10/IMG-20210228-WA0012.jpg`,
        `https://i.ibb.co/rv1X1zq/IMG-20210228-WA0014.jpg`,
        `https://i.ibb.co/yqC0YwW/IMG-20210228-WA0015.jpg`,
        `https://i.ibb.co/7Gcy4Xw/IMG-20210228-WA0016.jpg`,
        `https://i.ibb.co/6W4HYQL/IMG-20210228-WA0017.jpg`,
        `https://i.ibb.co/G2WJnKB/IMG-20210228-WA0018.jpg`,]
  return (
      <>
     
    <div
    id="carouselExampleDark"
    className="carousel carousel-dark slide"
    data-bs-ride="carousel" 
    data-bs-pause= {false}
    data-bs-interval="3000" 
  >
    <div className="carousel-indicators"  >

    {data.map((item, index)=>{
        return index==0? <button  key={index}
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button> : <button  key={index}
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={index}
      aria-label= { `Slide ${index+1}`}
    ></button>
      })}
    </div>
    <div className="carousel-inner">

      {data.map((item, index)=>{
        return index==0?  <div  key={index} className="carousel-item active sliderht"   >
        <LazyLoadImage src={item} className="d-block h-100 cover" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          {/* <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p> */}
        </div>
      </div> : <div  key={index} className="carousel-item sliderht"   >
        <LazyLoadImage src={item} className="d-block h-100 cover" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          {/* <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p> */}
        </div>
      </div>
      })}
      
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </>
  )
}

export default ThaneSlider


