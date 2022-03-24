import React from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GhansoliSlider1 = () => {
    let data = ['https://i.ibb.co/VQy9sw7/IMG-20170616-173000-scaled.jpg',
    'https://i.ibb.co/dfwSmbm/IMG-20170616-173008-scaled.jpg',
    'https://i.ibb.co/CV79Qgt/IMG-20170616-181253-scaled.jpg',
    'https://i.ibb.co/9VYksLB/IMG-20170616-181300-scaled.jpg',
    'https://i.ibb.co/441X0yS/IMG-20170616-181311-scaled.jpg',
    'https://i.ibb.co/yPzSN0q/IMG-20170616-181319-scaled.jpg',
    'https://i.ibb.co/XbDmz8V/IMG-20170616-181323-scaled.jpg',
    'https://i.ibb.co/3chf0kX/IMG-20170616-181328-scaled.jpg',
    'https://i.ibb.co/q5N2H1f/IMG-20170616-181332-scaled.jpg',
    'https://i.ibb.co/WKKgFvT/IMG-20170616-181346-scaled.jpg',
    'https://i.ibb.co/2hjLH1c/IMG-20170616-181401-scaled.jpg',
    'https://i.ibb.co/1sbbvcC/IMG-20170616-181430-scaled.jpg',
    'https://i.ibb.co/gS85VhG/IMG-20170616-181459-scaled.jpg',
    'https://i.ibb.co/SKqhxhP/IMG-20170616-181509-scaled.jpg',
    'https://i.ibb.co/3WJ7Ffv/IMG-20170616-192440-scaled.jpg',
    'https://i.ibb.co/dGQJw3D/IMG-20170616-192453-scaled.jpg',
    'https://i.ibb.co/9pKmnMK/IMG-20170616-202505-scaled.jpg',
    'https://i.ibb.co/zX7w7DQ/IMG-20170616-202521-scaled.jpg',
    'https://i.ibb.co/rvgsrLg/IMG-20170616-202532-scaled.jpg',
    'https://i.ibb.co/kXdHysf/IMG-20170616-202544-scaled.jpg',
    'https://i.ibb.co/mvwTLsy/IMG-20170616-202548-scaled.jpg',
    'https://i.ibb.co/g3ZwmPk/IMG-20170616-202618-scaled.jpg',
    'https://i.ibb.co/g6Jvr43/IMG-20170616-202621-scaled.jpg',
    'https://i.ibb.co/Mpdjd0J/IMG-20170616-202914-scaled.jpg',
    'https://i.ibb.co/tsRdwTx/IMG-20170616-202932-scaled.jpg',
    'https://i.ibb.co/fqW5pg9/IMG-20170616-202940-scaled.jpg',
    'https://i.ibb.co/khPtcQ6/IMG-20170616-203409-scaled.jpg',
    'https://i.ibb.co/HgJ1TPt/IMG-20170616-203417-scaled.jpg',
    'https://i.ibb.co/DQxCMyB/IMG-20170616-203522-scaled.jpg',
    'https://i.ibb.co/5x1kyMH/IMG-20170616-203641-scaled.jpg']

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