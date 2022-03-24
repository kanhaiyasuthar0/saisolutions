import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OnGoingSite = () => {
  return (
    <>
      
     
    <div className="card-group container my-3">
  <div className="card px-1">
  <div className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Qjjvg3hC1cY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    <div className="card-body">
      <h5 className="card-title">Ghansoli 2BHK Site</h5>
      
      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>
  <div className="card rounded px-1 rounded">
    <LazyLoadImage src="https://i.ibb.co/cv4mWSM/IMG-20210208-143236-1-scaled.jpg" className="card-img-top imageLimit rounded" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ghansoli 2BHK Site</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card px-1 rounded">
    <LazyLoadImage src="https://i.ibb.co/s6kFHcd/IMG-20190710-220527-1-768x1024.jpg" className="card-img-top imageLimit rounded" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ghansoli 4BHK Site</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    <div className="card-group container my-3">
  <div className="card px-1 rounded">
    <LazyLoadImage src="https://i.ibb.co/W6yKqNK/IMG-20210228-WA0013.jpg" className="card-img-top imageLimit rounded" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Thane Site</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card px-1">
    <LazyLoadImage src="https://i.ibb.co/cv4mWSM/IMG-20210208-143236-1-scaled.jpg" className="card-img-top imageLimit" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ghansoli 2BHK Site</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card px-1">
    <LazyLoadImage src="https://i.ibb.co/s6kFHcd/IMG-20190710-220527-1-768x1024.jpg" className="card-img-top imageLimit" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ghansoli 4BHK Site</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>


</>
  )
}

export default OnGoingSite