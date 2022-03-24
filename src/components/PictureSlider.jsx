import React from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

//Ghansoli 2BHK site2
const PictureSlider = () => {
    
    let data = [
    `https://i.ibb.co/pywt0dz/IMG-20210208-140052-1-scaled.jpg`,
    `https://i.ibb.co/0VTMYks/IMG-20210208-140055-1-scaled.jpg`,
    `https://i.ibb.co/vvCmZp1/IMG-20210208-143223-1-scaled.jpg`,
    `https://i.ibb.co/xFd0xPL/IMG-20210208-143228-1-scaled.jpg`,
    `https://i.ibb.co/Kxr3XTW/IMG-20210208-143231-1-scaled.jpg`,
    `https://i.ibb.co/pKvPT1G/IMG-20210208-143236-1-scaled.jpg`,
    `https://i.ibb.co/ZSGVLrc/IMG-20210208-144630-1-scaled.jpg`,
    `https://i.ibb.co/B2mV6Mt/IMG-20210208-144637-1-scaled.jpg`,
    `https://i.ibb.co/LhfZ94v/IMG-20210208-144645-1-scaled.jpg`]

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel" 
      data-bs-pause= {false}
      data-bs-interval="3000" 
    >
      {/* <button onClick={()=>{
            window.location.href="/Pictures"
        }}> Back to Pictures</button> */}
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
        
        
        {/* <div className="carousel-item sliderht"   > */}
          {/* <LazyLoadImage src='https://i.ibb.co/dfwSmbm/IMG-20170616-173008-scaled.jpg' className="d-block h-100" alt="..." /> */}
          {/* <div className="carousel-caption d-none d-md-block"> */}
            {/* <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
          {/* </div> */}
        {/* </div> */}
        {/* <div className="carousel-item sliderht"  > */}
          {/* <LazyLoadImage src='https://i.ibb.co/CV79Qgt/IMG-20170616-181253-scaled.jpg' className="d-block  h-100" alt="..." /> */}
          {/* <div className="carousel-caption d-none d-md-block"> */}
            {/* <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p> */}
          {/* </div> */}
        {/* </div> */}
        
        {/* <div className="carousel-item sliderht "  > */}
          {/* <LazyLoadImage src='https://i.ibb.co/9VYksLB/IMG-20170616-181300-scaled.jpg' className="d-block h-100" alt="..." /> */}
          {/* <div className="carousel-caption d-none d-md-block"> */}
            {/* <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p> */}
          {/* </div> */}
        {/* </div> */}
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

export default PictureSlider