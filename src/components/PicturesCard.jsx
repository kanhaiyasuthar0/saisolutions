import React, { useState } from 'react'
import "./picture.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PictureSlider from './PictureSlider';
import ThaneSlider from './ThaneSlider';
import GhansoliSlider from './GhansoliSlider';
import GhansoliSlider1 from './GhansoliSlider1';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ghansoli2 from './Ghansoli2';
import chembur from "../Assets/Images/chembur jweller/1.jpeg"
import kalamboli from "../Assets/Images/kalamboli 3bhk/1.jpeg"
import kaler from "../Assets/Images/kaler bungalow/4.jpeg"
import mahendra from "../Assets/Images/sites1/1.jpeg"
import { useEffect } from 'react';
import axios from 'axios';
import { Urls } from './urlConstant';
import { Col, Row } from 'react-bootstrap';
import PhotoViewer from './PhotoViewer';
import Loader from './Loader';
import Navbar from './Navbar';
const PicturesCard = (props) => {
  const [allicture, setAllPicture] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [viewPictureSlider, setviewPictureSlider] = useState(false)
  const [viewData, setviewData] = useState([])
  const toggleView = (data, clear) => {
    if (clear) {
      setviewData(data)
      setviewPictureSlider(false)
    } else {
      setviewData(data)
      setviewPictureSlider(true)
    }
  }
  const getAllSiteData = async () => {
    setLoading(true)
    try {
      let res = await axios.get(Urls.mainUrl + "/allsitedata")
      setAllPicture([...res.data])
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    // getAllSiteData()
  }, [])
  return (
    // <div style={{ padding: "10px" }} className={`${props.theme ? 'pictureDiv' : "darkDiv"}`}>
    <div style={{ padding: "0px 20px 20px 20px" }}>
      <Navbar theme={props.theme} setTheme={props.setTheme} />
      {isLoading ? <Loader /> : ""}
      {/* <PictureSlider /> */}
      {viewPictureSlider ? <PhotoViewer toggleView={toggleView} data={viewData} /> : ""}

      {!viewPictureSlider ? <Row>
        {
          allicture.length > 0 ? allicture.map((site, index) => {
            if (site.images.length > 0) return (<Col key={index} lg={4} sm={12} className="">
              <LazyLoadImage onClick={() => { toggleView(site, false) }} style={{ cursor: "pointer", height: "400px" }} src={site.images[0]} alt="..." className="card-img-top rounded" />
              <span style={{ width: "100%" }}>
                <h5 className=""> <span style={{ fontWeight: "bold" }}>  Site name :   </span>  {site.site_name}</h5>
                <p className=""> <span style={{ fontWeight: "bold" }}>   Description :  </span> {site.site_description}</p>
                <p className=""> <span style={{ fontWeight: "bold" }}>  Site type :   </span>  {site.site_type}</p>
                <p className="">  <span style={{ fontWeight: "bold" }}>  Site location :  </span>  {site.site_location}</p>
                <p className=""><small className="">{'Site completion date : ' + site.date}</small></p>
              </span>
            </Col>
            )
          }) : ""
        }
        {/* </Row> */}

        {/* <Row> */}
        {/* <Col lg={4} sm={12} >
          <div className="card px-1">
            <Link to="/ghansoli1"><LazyLoadImage src="https://i.ibb.co/rvgsrLg/IMG-20170616-202532-scaled.jpg" className="card-img-top imageLimit rounded-3 " alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title">  Ghansoli 2BHK Site </h5>
              <p className="card-text">The construction of a two-bedroom home on a plot close to the Ghansoli railway station dealt with excellent aesthetics and strong material selection.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>

        </Col> */}
        {/* <Col lg={4} sm={12} >
          <div className="card rounded px-1 rounded">
            <Link to="/ghansoli2"> <LazyLoadImage src="https://i.ibb.co/cv4mWSM/IMG-20210208-143236-1-scaled.jpg" className="card-img-top imageLimit rounded" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title">Ghansoli 2BHK Site</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>

        </Col> */}
        {/* <Col lg={4} sm={12} >
          <div className="card px-1 rounded">
            <Link to="/ghansoli4">   <LazyLoadImage src="https://i.ibb.co/s6kFHcd/IMG-20190710-220527-1-768x1024.jpg" className="card-img-top imageLimit rounded" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title">Ghansoli 4BHK Site</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>

        </Col> */}
        {/* </Row> */}

        {/* <Row> */}
        {/* <Col lg={4} sm={12}>
          <div className="card px-1 rounded">
            <Link to="/kaler"> <LazyLoadImage src={kaler} className="card-img-top imageLimit rounded" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title">Kaler Site</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>

        </Col> */}
        {/* <Col lg={4} sm={12}>

          <div className="card px-1">
            <Link to="/chembur">  <LazyLoadImage src={chembur} className="card-img-top imageLimit" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title">Chembur Jwellers</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </Col> */}
        {/* <Col lg={4} sm={12}>

          <div className="card px-1">
            <Link to="/kalamboli">  <LazyLoadImage src={kalamboli} className="card-img-top imageLimit" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title">Kalamboli</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </Col> */}
        {/* <Col lg={4} sm={12}>

          <div className="card px-1">
            <Link to="/site1jweller">  <LazyLoadImage src={mahendra} className="card-img-top imageLimit" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title">Mahendra Jwellers Ghansoli</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </Col> */}
      </Row> : ""}

      {/* <Link to= "/thane"> */}
      {/* </Link> */}

      {/* <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}> */}

      {/* </div> */}
    </div>

  )
}

export default PicturesCard