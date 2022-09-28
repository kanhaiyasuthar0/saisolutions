
import React from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import i1 from "../Assets/Images/Ghansoli 4bhk/1.jpeg"
import i2 from "../Assets/Images/Ghansoli 4bhk/2.jpeg"
import i3 from "../Assets/Images/Ghansoli 4bhk/3.jpeg"
import i4 from "../Assets/Images/Ghansoli 4bhk/4.jpeg"
import i5 from "../Assets/Images/Ghansoli 4bhk/5.jpeg"
import i6 from "../Assets/Images/Ghansoli 4bhk/6.jpeg"
import i7 from "../Assets/Images/Ghansoli 4bhk/7.jpeg"
import i8 from "../Assets/Images/Ghansoli 4bhk/8.jpeg"
import i9 from "../Assets/Images/Ghansoli 4bhk/9.jpeg"
import i10 from "../Assets/Images/Ghansoli 4bhk/10.jpeg"
import i11 from "../Assets/Images/Ghansoli 4bhk/11.jpeg"
import i12 from "../Assets/Images/Ghansoli 4bhk/12.jpeg"
import i13 from "../Assets/Images/Ghansoli 4bhk/13.jpeg"
import i14 from "../Assets/Images/Ghansoli 4bhk/14.jpeg"
import i15 from "../Assets/Images/Ghansoli 4bhk/15.jpeg"
import i16 from "../Assets/Images/Ghansoli 4bhk/16.jpeg"
import i17 from "../Assets/Images/Ghansoli 4bhk/17.jpeg"
import i18 from "../Assets/Images/Ghansoli 4bhk/18.jpeg"
import i19 from "../Assets/Images/Ghansoli 4bhk/19.jpeg"
import i20 from "../Assets/Images/Ghansoli 4bhk/20.jpeg"
import i21 from "../Assets/Images/Ghansoli 4bhk/21.jpeg"
import i22 from "../Assets/Images/Ghansoli 4bhk/22.jpeg"
import i23 from "../Assets/Images/Ghansoli 4bhk/23.jpeg"
import i24 from "../Assets/Images/Ghansoli 4bhk/24.jpeg"
import i25 from "../Assets/Images/Ghansoli 4bhk/25.jpeg"
import i26 from "../Assets/Images/Ghansoli 4bhk/26.jpeg"
import i27 from "../Assets/Images/Ghansoli 4bhk/27.jpeg"
import i28 from "../Assets/Images/Ghansoli 4bhk/28.jpeg"
import i29 from "../Assets/Images/Ghansoli 4bhk/29.jpeg"
import i30 from "../Assets/Images/Ghansoli 4bhk/30.jpeg"

//Ghansoli 4BHK
const GhansoliSlider = () => {
  let data = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21,i22,i23,i24,i25,i26,i27,i28,i29,i30]
  
  
  console.log(data)
  
  return (
    <div
    id="carouselExampleDark"
    className="carousel carousel-dark slide"
    data-bs-ride="carousel" 
    data-bs-pause= {false}
    data-bs-interval="3000"
    style={{minHeight:"92vh"}}

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

export default GhansoliSlider