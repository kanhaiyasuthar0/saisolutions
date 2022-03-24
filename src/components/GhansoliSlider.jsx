
import React from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
//Ghansoli 4BHK
const GhansoliSlider = () => {
    let data = [
`https://i.ibb.co/HGY8Rkr/IMG-20190710-124945-768x1024.jpg`,
`https://i.ibb.co/qnQ898c/IMG-20190710-124953-1-768x1024.jpg`,
`https://i.ibb.co/qnQ898c/IMG-20190710-124953-1-768x1024.jpg`,
`https://i.ibb.co/2Wj11Jr/IMG-20190710-125007-1-768x1024.jpg`,
`https://i.ibb.co/2Wj11Jr/IMG-20190710-125007-1-768x1024.jpg`,
`https://i.ibb.co/f9K4mpp/IMG-20190710-125047-1-768x1024.jpg`,
`https://i.ibb.co/f9K4mpp/IMG-20190710-125047-1-768x1024.jpg`,
`https://i.ibb.co/kHp1m5R/IMG-20190710-125058-1-768x1024.jpg`,
`https://i.ibb.co/kHp1m5R/IMG-20190710-125058-1-768x1024.jpg`,
`https://i.ibb.co/C7SYF1S/IMG-20190710-125109-1-768x1024.jpg`,
`https://i.ibb.co/C7SYF1S/IMG-20190710-125109-1-768x1024.jpg`,
`https://i.ibb.co/xHPzQDx/IMG-20190710-125116-768x1024.jpg`,
`https://i.ibb.co/rZMQYsd/IMG-20190710-125148-768x1024.jpg`,
`https://i.ibb.co/hBFQ3sb/IMG-20190710-125158-768x1024.jpg`,
`https://i.ibb.co/8NZ9xtr/IMG-20190710-125224-768x1024.jpg`,
`https://i.ibb.co/8PjMGxt/IMG-20190710-125232-768x1024.jpg`,
`https://i.ibb.co/H7t2b6F/IMG-20190710-125241-768x1024.jpg`,
`https://i.ibb.co/bbpZSSF/IMG-20190710-150812-768x1024.jpg`,
`https://i.ibb.co/zmxKK7p/IMG-20190710-220401-768x1024.jpg`,
`https://i.ibb.co/WVHLyXW/IMG-20190710-220409-768x1024.jpg`,
`https://i.ibb.co/4JKVT0G/IMG-20190710-220433-768x1024.jpg`,
`https://i.ibb.co/TTx6hqG/IMG-20190710-220457-768x1024.jpg`,
`https://i.ibb.co/fndBgV0/IMG-20190710-220504-768x1024.jpg`,
`https://i.ibb.co/gz3T1PS/IMG-20190710-220520-1-768x1024.jpg`,
`https://i.ibb.co/7bWn3K6/IMG-20190710-220533-768x1024.jpg`,
`https://i.ibb.co/LPjmtsV/IMG-20190710-220642-1-768x1024.jpg`,
`https://i.ibb.co/LPjmtsV/IMG-20190710-220642-1-768x1024.jpg`,
`https://i.ibb.co/20JJdPw/IMG-20190708-112732-768x1024.jpg`,
`https://i.ibb.co/Y3vczR2/IMG-20190708-112737-768x1024.jpg`,
`https://i.ibb.co/6ZwhqR0/IMG-20190708-112748-768x1024.jpg`,
`https://i.ibb.co/yR3Dg3y/IMG-20190710-124749-1-768x1024.jpg`,
`https://i.ibb.co/yR3Dg3y/IMG-20190710-124749-1-768x1024.jpg`,
`https://i.ibb.co/93Vnjc1/IMG-20190710-124802-1-768x1024.jpg`,
`https://i.ibb.co/pQZxJDf/IMG-20190710-124824-768x1024.jpg`,
`https://i.ibb.co/02zhhfk/IMG-20190710-124841-768x1024.jpg`,
`https://i.ibb.co/X7pbJsz/IMG-20190710-124852-768x1024.jpg`,
`https://i.ibb.co/Lrq5F1d/IMG-20190710-124932-1-768x1024.jpg`,
`https://i.ibb.co/Lrq5F1d/IMG-20190710-124932-1-768x1024.jpg` ]
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