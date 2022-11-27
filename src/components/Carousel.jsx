import React, { useEffect } from "react";
import "./picture.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dingrol1 from "../Assets/Images/Dingrol/dingrol_cur1.jpg";
import dingrol2 from "../Assets/Images/Dingrol/dingrol_cur2.jpg";
import dingrol3 from "../Assets/Images/Dingrol/dingrol_cur3.jpg";
import dingrol4 from "../Assets/Images/Dingrol/dingrol_cur4.jpg";
import i1 from "../Assets/Images/sites1/1.jpeg"
import i2 from "../Assets/Images/sites1/2.jpeg"
import i3 from "../Assets/Images/sites1/3.jpeg"
import i4 from "../Assets/Images/sites1/4.jpeg"
import i5 from "../Assets/Images/sites1/5.jpeg"
import i6 from "../Assets/Images/sites1/6.jpeg"
// import loaderpic from "sai_solution_loader.gif"
import { useState } from "react";
import Introduction from "./Introduction";
function Carousel(props) {
  let imgarr = [i1,i2,i3,i4,dingrol1, dingrol2, dingrol3, dingrol4];
  const [loader, setLoader] = useState(true);
  const [screenY, setScreenY] = useState(0)
  // console.log(props)
  // console.log(screenY)
  useEffect(() => {
  (window.addEventListener('scroll', ()=>{  setScreenY(window.scrollY)}))
    let id = setTimeout(() => {
      setLoader(false);
    }, 1000);
    // return clearTimeout(id)
  }, []);
  return (
    <div>
      {loader ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%",
          }}
        >
          {" "}
          <img alt="loader" src="/sai_solution_loader.svg" />
        </div>
      ) : (
        <div className={`padder ${props.theme ? "lightdiv" : "darkdiv"}`} >
          <div  style={{height:"500px", maxWidth:"500px",display:"flex", flexDirection:"column", justifyContent:"center",marginBottom:"300px"}}>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide mainCarousel"
            data-bs-ride="carousel"
            data-bs-pause={false}
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="7"
                aria-label="Slide 8"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="8"
                aria-label="Slide 9"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="9"
                aria-label="Slide 10"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active sliderht">
                <LazyLoadImage
                  src={i1}
                  className="d-block h-100 cover"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p> */}
                </div>
              </div>
              <div className="carousel-item sliderht">
                <LazyLoadImage
                  src={i2}
                  className="d-block h-100 cover"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
                </div>
              </div>
              <div className="carousel-item sliderht">
                <LazyLoadImage
                  src={i3}
                  className="d-block h-100 cover"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
                </div>
              </div>
              <div className="carousel-item sliderht">
                <LazyLoadImage
                  src={i4}
                  className="d-block h-100 cover"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
                </div>
              </div>
              <div className="carousel-item sliderht">
                <LazyLoadImage
                  src={i5}
                  className="d-block h-100 cover"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
                </div>
              </div>
              <div className="carousel-item sliderht">
                <LazyLoadImage
                  src={i6}
                  className="d-block h-100 cover"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
                </div>
              </div>
              <div className="carousel-item sliderht">
                <LazyLoadImage
                  src={dingrol1}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
                </div>
              </div>
              <div className="carousel-item sliderht">
                <LazyLoadImage
                  src={dingrol2}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
                </div>
              </div>
              <div className="carousel-item sliderht">
                <LazyLoadImage
                  src={dingrol3}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p> */}
                </div>
              </div>
              <div className="carousel-item sliderht">
                <LazyLoadImage
                  src={dingrol4}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p> */}
                </div>
              </div>
            </div>
            <button
             className={`carousel-control-prev ${props.theme ? "lightIcon" : "darkIcon"}`}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className={`carousel-control-next ${props.theme ? "lightIcon" : "darkIcon"}`}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
          <Introduction />

        </div>
      )}
    </div>
  );
}

export default Carousel;
