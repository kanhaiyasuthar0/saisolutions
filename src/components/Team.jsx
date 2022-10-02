import React from 'react'
import desktop1 from "../Assets/Images/screens/desktop1.svg"
import ambalal from "../Assets/Images/Team/ambalal.jpeg"
import bharat from "../Assets/Images/Team/bharat.jpeg"
import kailash from "../Assets/Images/Team/kailash.jpeg"
const Team = () => {
  return (
    <div style={{background:`url(${desktop1})`, minHeight:"125vh"}}>
        <div >
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ambalal} class="d-block cover" alt="..."/>
      <div style={{color:"black", background:"white",width:"fit-content", margin:"auto"}} class="carousel-caption d-none d-md-block">
        <h5>Founder : Mr. Ambalal Suthar</h5>
        <p>Work experience of more than 35 years.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={bharat} class="d-block cover" alt="..."/>
      <div style={{color:"black", background:"white",width:"fit-content", margin:"auto"}} class="carousel-caption d-none d-md-block">
        <h5>Mr. Bharat Suthar</h5>
        <p>Interior Designer and Site Supervisor</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={kailash} class="d-block cover" alt="..."/>
      <div style={{color:"black", background:"white", width:"fit-content", margin:"auto"}} class="carousel-caption d-none d-md-block">
        <h5>Mr. Kailash Suthar</h5>
        <p>Interior Contractor with more than 12 years of experience</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
  )
}

export default Team