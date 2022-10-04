import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from '../Assets/Icons/home.png'
import sai from '../Assets/Icons/logo_sai_light.png'
import pictureIcon from '../Assets/Icons/picture.png'
import videoIcon from '../Assets/Icons/video.png'
import team from '../Assets/Icons/team.png'
import { Switch } from "@mui/material";
function Navbar(props) {
  const [active, setActive] = useState();
  return (
    <nav style={{background: props.theme ? "#EF5557" : "black", color:props.theme ? "black" : "white"}} className="navbar sticky-top navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <img style={{height:"30px", width:"30px"}} src={sai} alt="sailogo" />
          <span>

          SAi solutions
          </span>
          </div>
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
              <Link className={`nav-link ${props.theme ? "normal" : "dark"}`} aria-current="page" to="/home">
                 <div style={{marginRight:"20px", padding:"10px 20px"}}> <span>Home</span>  <img style={{height:"30px", width:"30px"}} src={homeIcon} alt="home" /> </div>
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link className={`nav-link ${props.theme ? "normal" : "dark"}`} aria-current="page" to="/Pictures">
              <div style={{marginRight:"20px", padding:"10px 20px"}}> <span>Pictures</span>  <img style={{height:"30px", width:"30px"}} src={pictureIcon} alt="picture" /> </div>

                
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.theme ? "normal" : "dark"}`}  aria-current="page" to="/Videos">
              <div style={{marginRight:"20px", padding:"10px 20px"}}> <span>Videos</span>  <img style={{height:"30px", width:"30px"}} src={videoIcon} alt="picture" /> </div>

                
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.theme ? "normal" : "dark"}`}  aria-current="page" to="/Team">
              <div style={{marginRight:"20px", padding:"10px 20px"}}> <span>Our team</span>  <img style={{height:"30px", width:"30px"}} src={team} alt="picture" /> </div>

                
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
            <Switch onClick={()=>props.setTheme(!props.theme)} defaultChecked color="secondary" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
