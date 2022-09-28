import React from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GhansoliSlider1 = () => {
    let data = []

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

export default GhansoliSlider1