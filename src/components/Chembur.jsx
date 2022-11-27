
import React from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import i1 from "../Assets/Images/chembur jweller/1.jpeg"
import i2 from "../Assets/Images/chembur jweller/2.jpeg"
import i3 from "../Assets/Images/chembur jweller/3.jpeg"
import i4 from "../Assets/Images/chembur jweller/4.jpeg"
import i5 from "../Assets/Images/chembur jweller/5.jpeg"
import i6 from "../Assets/Images/chembur jweller/6.jpeg"
import i7 from "../Assets/Images/chembur jweller/7.jpeg"
import i8 from "../Assets/Images/chembur jweller/8.jpeg"
import i9 from "../Assets/Images/chembur jweller/9.jpeg"
import i10 from "../Assets/Images/chembur jweller/10.jpeg"
import i11 from "../Assets/Images/chembur jweller/11.jpeg"
import i12 from "../Assets/Images/chembur jweller/12.jpeg"


//Ghansoli 4BHK
const Chembur = () => {
  let data = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11,i12]
  
  
  console.log(data)
  
  return (
    <div
    id="carouselExampleDark"
    className="carousel carousel-dark slide"
    data-bs-ride="carousel" 
    data-bs-pause= {false}
    data-bs-interval="3000"
    style={{minHeight:"92vh", maxHeight:"100vh", boxSizing:"border-box", maxWidth:"400px"}}

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
  )
}

export default Chembur