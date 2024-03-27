import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Existmodel.css'
import Videobg from '../assets/bg-video2.mp4'
import vishwa from '../assets/vishwa/vishwa.jpg'


export default function Existmodel() {
    const navigate = useNavigate();
    const settings = {
        dots : true,
        infinite : true,
        speed : 500,
        slidesToShow: 1,
        autoplay: true,
    autoplaySpeed: 2000,

    };

    

  return (
    <div>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={Videobg} type="video/mp4" />
        </video>
      </div>
      <div className="carousel-container">
        <h1 className="header-text">AVAILABLE DESIGNERS:</h1>
        <Slider {...settings}>
          <div>
            <div className="card">
              <img
              src={vishwa}
              alt={vishwa}
              className='card-image'
              />
              <h3>VISHWA</h3>
              
              <ul className="custom-list">
                <li>3D DESIGN</li>
                <li>INTERIOR DESIGN</li>
              </ul>
              <Link to="/pdfviewer">
                <button className="card-button" >LEARN MORE</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="card">
              <h3>VINCENT</h3>
              <ul className="custom-list">
                <li>VR RENDERING</li>
                <li>EXTERIOR DESIGN</li>
              </ul>
              <Link to="/page2">
                <button className="card-button">HOP IN</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="card">
              <h3>VIMAL</h3>
              <ul className="custom-list">
                <li>3D DESIGN</li>
                <li>EXTERIOR DESIGN</li>
              </ul>
              <Link to="/page3">
                <button className="card-button">HOP IN </button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
