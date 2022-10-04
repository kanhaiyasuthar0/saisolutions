import React from "react";
// import footerImg from
const Footer = (props) => {
  return (
    <div >
      <nav style={{background: props.theme ? "#EF5557" : "black", color:props.theme ? "black" : "white"}} class="navbar navbar-expand-lg">
      
        <a class="navbar-brand" href="#"></a>
        
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a className={`nav-link ${props.theme ? "normal" : "dark"}`}  href="#">
              <div>Home  <span class="sr-only">(current)</span></div>  
              </a>
            </li>
            <li class="nav-item">
              <a className={`nav-link ${props.theme ? "normal" : "dark"}`}  href="#">
               <div> About us</div>
              </a>
            </li>
            <li class="nav-item">
              <a className={`nav-link ${props.theme ? "normal" : "dark"}`}  href="#">
               <div>Contact us</div> 
              </a>
            </li>
          </ul>
          <span className={`nav-link ${props.theme ? "normal" : "dark"}`} class="navbar-text"><div> Proud Indian</div></span>
        </div>
      </nav>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
