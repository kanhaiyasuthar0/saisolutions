import React from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PictureSlider from './PictureSlider';
import ThaneSlider from './ThaneSlider';
import GhansoliSlider from './GhansoliSlider';
import GhansoliSlider1 from './GhansoliSlider1';
import { BrowserRouter as Router, Routes , Route , Link } from "react-router-dom";

const PicturesCard = () => {
  return (
      <>
     
    <PictureSlider/>  
    {/* <ThaneSlider/> */}
    {/* <GhansoliSlider/> */}
    {/* <GhansoliSlider1/> */}
    <Routes>


          <Route path='/ghansoli2' element={<PictureSlider/>} />
          <Route path='/thane' element={<ThaneSlider/> } />
          <Route path='/ghansoli4' element={<GhansoliSlider/>} />
          <Route path='/ghansoli1' element={ <GhansoliSlider1/>} />
    </Routes>
        
    <div className="card-group container my-3">
      
  <div className="card px-1"> 
  <Link to="/ghansoli1"><LazyLoadImage src="https://i.ibb.co/rvgsrLg/IMG-20170616-202532-scaled.jpg" className="card-img-top imageLimit rounded-3 " alt="..."/></Link> 
    <div className="card-body">
      <h5 className="card-title">  <Link to="/ghansoli1"> Ghansoli 2BHK Site </Link> </h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div> 
  </div>
  
  {/* <Link to="/ghansoli2">        */}
  <div className="card rounded px-1 rounded">
    <LazyLoadImage src="https://i.ibb.co/cv4mWSM/IMG-20210208-143236-1-scaled.jpg" className="card-img-top imageLimit rounded" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ghansoli 2BHK Site</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  {/* </Link> */}
  {/* <Link to= "/ghansoli4"> */}
  <div className="card px-1 rounded">
    <LazyLoadImage src="https://i.ibb.co/s6kFHcd/IMG-20190710-220527-1-768x1024.jpg" className="card-img-top imageLimit rounded" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ghansoli 4BHK Site</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  {/* </Link> */}
</div>
    <div className="card-group container my-3">
      {/* <Link to= "/thane"> */}
  <div className="card px-1 rounded">
    <LazyLoadImage src="https://i.ibb.co/W6yKqNK/IMG-20210228-WA0013.jpg" className="card-img-top imageLimit rounded" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Thane Site</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  {/* </Link> */}
 
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

export default PicturesCard