import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from '../Assets/Icons/home.png'
import pictureIcon from '../Assets/Icons/picture.png'
import videoIcon from '../Assets/Icons/video.png'
import team from '../Assets/Icons/team.png'
function Navbar() {
  const [active, setActive] = useState();
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          SAi solutions
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                 <div style={{marginRight:"20px"}}> <span>Home</span>  <img style={{height:"30px", width:"30px"}} src={homeIcon} alt="home" /> </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Pictures">
              <div style={{marginRight:"20px"}}> <span>Pictures</span>  <img style={{height:"30px", width:"30px"}} src={pictureIcon} alt="picture" /> </div>

                
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Videos">
              <div style={{marginRight:"20px"}}> <span>Videos</span>  <img style={{height:"30px", width:"30px"}} src={videoIcon} alt="picture" /> </div>

                
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Team">
              <div style={{marginRight:"20px"}}> <span>Our team</span>  <img style={{height:"30px", width:"30px"}} src={team} alt="picture" /> </div>

                
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/ongoing">
                OnGoing Sites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/gallery">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/gallery">
                Contact Us
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="#">
                About Us
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
