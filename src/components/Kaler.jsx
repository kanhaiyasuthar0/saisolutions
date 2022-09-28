import React from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import i1 from "../Assets/Images/kaler bungalow/1.jpeg"
import i2 from "../Assets/Images/kaler bungalow/2.jpeg"
import i3 from "../Assets/Images/kaler bungalow/3.jpeg"
import i4 from "../Assets/Images/kaler bungalow/4.jpeg"
import i5 from "../Assets/Images/kaler bungalow/5.jpeg"
import i6 from "../Assets/Images/kaler bungalow/6.jpeg"
import i7 from "../Assets/Images/kaler bungalow/7.jpeg"
import i8 from "../Assets/Images/kaler bungalow/8.jpeg"
import i9 from "../Assets/Images/kaler bungalow/9.jpeg"
import i10 from "../Assets/Images/kaler bungalow/10.jpeg"
import i11 from "../Assets/Images/kaler bungalow/11.jpeg"
import i12 from "../Assets/Images/kaler bungalow/12.jpeg"
import i13 from "../Assets/Images/kaler bungalow/13.jpeg"
import i14 from "../Assets/Images/kaler bungalow/14.jpeg"
import i15 from "../Assets/Images/kaler bungalow/15.jpeg"
const Kaler = () => {
    let data = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15]

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel" 
      data-bs-pause= {false}
      data-bs-interval="3000" 
    >
      <div className="carousel-indicators"  >

      {data.map((item, index)=>{
          return index==0? <button key={index}
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
  )
}

export default Kaler