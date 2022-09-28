import React, { useEffect } from "react";
import "./picture.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dingrol1 from "../Assets/Images/Dingrol/dingrol_cur1.jpg";
import dingrol2 from "../Assets/Images/Dingrol/dingrol_cur2.jpg";
import dingrol3 from "../Assets/Images/Dingrol/dingrol_cur3.jpg";
import dingrol4 from "../Assets/Images/Dingrol/dingrol_cur4.jpg";
// import loaderpic from "sai_solution_loader.gif"
import { useState } from "react";
import Introduction from "./Introduction";
function Carousel() {
  let imgarr = [dingrol1, dingrol2, dingrol3, dingrol4];
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    let id = setTimeout(() => {
      setLoader(false);
    }, 2000);
    // return clearTimeout(id)
  }, []);
  return (
    <>
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
          <img alt="loader" src="/sai_solution_loader.gif" />
        </div>
      ) : (
        <div>
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
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active sliderht">
                <LazyLoadImage
                  src={dingrol1}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p> */}
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
              className="carousel-control-prev"
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
              className="carousel-control-next"
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
          <Introduction />
        </div>
      )}
    </>
  );
}

export default Carousel;
