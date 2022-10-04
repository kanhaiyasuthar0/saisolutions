import React from "react";
import "./picture.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import best1 from "../Assets/Images/Ghansoli 2bhk site1/3.jpeg";
import best2 from "../Assets/Images/Ghansoli 2bhk site1/7.jpeg";
import best3 from "../Assets/Images/Ghansoli 2bhk site1/11.jpeg";
import best10 from "../Assets/Images/Ghansoli 2bhk site1/11.jpeg";
import best4 from "../Assets/Images/Ghansoli 2bhk site1/16.jpeg";
import best5 from "../Assets/Images/Ghansoli 2bhk site1/17.jpeg";
import best6 from "../Assets/Images/Ghansoli 2bhk site1/20.jpeg";
import best7 from "../Assets/Images/Ghansoli 2bhk site1/25.jpeg";
import best8 from "../Assets/Images/Ghansoli 2bhk site1/28.jpeg";
import best9 from "../Assets/Images/Ghansoli 2bhk site1/30.jpeg";
//Ghansoli 2BHK site2
const PictureSlider = () => {
  let data = [
    best1,
    best2,
    best3,
    best4,
    best5,
    best6,
    best7,
    best8,
    best9,
    best10,
  ];

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      data-bs-pause={false}
      data-bs-interval="3000"
      style={{minHeight:"92vh", marginBottom:"300px"}}
    >
      {/* <button onClick={()=>{
            window.location.href="/Pictures"
        }}> Back to Pictures</button> */}
      <div className="carousel-indicators">
        {data.map((item, index) => {
          return index == 0 ? (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          ) : (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              aria-label={`Slide ${index + 1}`}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {data.map((item, index) => {
          return index == 0 ? (
            <div key={index} className="carousel-item active sliderht">
              <LazyLoadImage
                src={item}
                className="d-block h-100 cover"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p> */}
              </div>
            </div>
          ) : (
            <div key={index} className="carousel-item sliderht">
              <LazyLoadImage
                src={item}
                className="d-block h-100 cover"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p> */}
              </div>
            </div>
          );
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
  );
};

export default PictureSlider;
