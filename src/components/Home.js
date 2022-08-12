import React, { useEffect, useState } from 'react';
import axios from '../api/Product';
import {Link} from 'react-router-dom'
import img1 from '../img/home-page-image-1-min.jpg'
import img2 from '../img/home-page-decor-image-1-min.jpg'
import img3 from '../img/home-page-decor-image-2-min.jpg'
import img4 from '../img/white.jpg'
import img6 from '../img/xe2.png'
import imgpartner1 from '../img/logotype-partner-1-hover-min.png'
import imgpartner2 from '../img/logotype-partner-2-hover-min.png'
import imgpartner3 from '../img/logotype-partner-3-hover-min.png'
import imgpartner4 from '../img/logotype-partner-4-hover-min.png'
import imgpartner5 from '../img/logotype-partner-5-hover-min.png'
import Carousel from './Carousel'
const Home = () => {

  const [list,setList] = useState([])
  const getMotor = async()=>{
   const motor = await axios.get("/motor")
   setList(motor.data)
  }
  useEffect(()=>{
    getMotor()
  },[])

  const showList = list.slice(0,6).map((pr,indx)=>{
    return <div className="col-md-3" key={indx}>
            <div className="content">
              <h3>{pr.name}</h3>
              <h3>{pr.cc} CC</h3>
              <h4>POWERED BY {pr.company}</h4>
              <h5>${pr.price}</h5>
            </div>
            <Link to="detail" state={pr}>
              <img src={pr.imglink} alt="#" />
            </Link>
          </div>
  })

  return (  
   <>
   <Carousel></Carousel>
  <div className="elementer-selection-wrap">
    <div className="elementer-selection-wrap-left">
      <img src={img1} alt="" />
    </div>
    <div className="elementer-selection-wrap-content">
      <h4>TAKING RIDES TO A NEWER LEVEL</h4>
      <h2>
        {" "}
        GREAT PERFORMANCE <br />
        THAT MATTERS IN FUTURE
      </h2>
      <h4>
        {" "}
        Do you have a passion for motorcycles and care about fellow riders?
        Keymoto is wordpress template has been created to help you build a
        creative website for moto sellers and racing enthusiasts. It features
        attractive and neat design that ensures that your online page looks
        professional at all times.
        <br />
        Cutting Edge Tech All to and it were seed give itself above seas
        greater.
        <br />
        Perfect Styling Fruit it Whose after brought their is second him.
        <br />
        Distinctive Beauty Fruit it Whose after brought their is second him.
        <br />
        Radiance Polishing All to and it were seed give itself above seas
        greater.
      </h4>
    </div>
  </div>
  <div className="elementer-selection-wrap-bottom">
    <img src={img2} alt="" />
    <img src={img3} alt="" />
  </div>
  <div className="elementor-background-overlay">
    <img src={img4} alt="" />
    <div className="elementor-background-overlay-atribute">
      <div className="elementor-background-overlay-item">
        <a href="">
          SPORT BIKE
          <div className="item-icon">
            <i className="fa-solid fa-motorcycle" style={{ fontSize: 60 }} />
          </div>
        </a>
      </div>
      <div className="elementor-background-overlay-item">
        <a href="">
          CHOPPER
          <div className="item-icon">
            <i className="fa-solid fa-motorcycle" style={{ fontSize: 60 }} />
          </div>
        </a>
      </div>
      <div className="elementor-background-overlay-item">
        <a href="">
          CRUISER
          <div className="item-icon">
            <i className="fa-solid fa-motorcycle" style={{ fontSize: 60 }} />
          </div>
        </a>
      </div>
      <div className="elementor-background-overlay-item">
        <a href="">
          TOURING BIKE
          <div className="item-icon">
            <i className="fa-solid fa-motorcycle" style={{ fontSize: 60 }} />
          </div>
        </a>
      </div>
      <div className="elementor-background-overlay-item">
        <a href="">
          ROADSTER
          <div className="item-icon">
            <i className="fa-solid fa-motorcycle" style={{ fontSize: 60 }} />
          </div>
        </a>
      </div>
    </div>
  </div>
  <div className="container-motorcycle">
    <div className="container-motorcycle-title">
      <i className="fa-solid fa-motorcycle" style={{ fontSize: 60 }} />
      <h3>
        TAKING RIDES TO A NEWER LEVEL
        <br />
      </h3>
      <h2>
        {" "}
        CHOOSE A MOTORCYCLE
        <br />
      </h2>
      <h4>
        Everyone needs custom graphic design theme for your car dealership
        business in the world
        <br />. I will introduce you a nice car dealer wordpress template which
        is made by igor pavlov,
        <br /> it’s suitable for everyone who want to open motorbikes website
      </h4>
    </div>
    <div className="container-motorcycle-item-top">
     {showList}
    </div>
  </div>
  <div className="news">
    <div className="news-img">
      <img src={img6} alt="" />
    </div>
    <div className="news-content">
      <h4>TAKING RIDES TO A NEWER LEVEL 1000CC</h4>
      <h2>H2R A STEP ABOVE WITH RIDER-FRIENDLY NATURE </h2>
      <h3>
        The content of the template can be changed very easily without coding
        skills in order to show your latest bikes or any other moto-related
        products, news, or events EASY TO BOOK FOR RENTALS
      </h3>
    </div>
  </div>
  <div className="video">
    <div className="video-content">
      <h3>THE POWERFUL PERFORMANCE WITH OPTIMIZED BALANCED</h3>
      <br />
      <h4>
        OUR THEME OFFER A WIDE VARIETY OF OPTIONS SUITABLE FOR ANY KIND OF USE
        FOR YOUR MOTO BUSINESS
      </h4>
      <img src="/img/xe3.png" alt="" />
    </div>
    <div className="box-video">
      <iframe
        width={1300}
        height={600}
        src="https://www.youtube.com/embed/a7nwu6hpwgM"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />
    </div>
  </div>
  <div className="brand">
    <div className="brand-box">
      <img src={imgpartner1} alt="" />
    </div>
    <div className="brand-box">
      <img src={imgpartner2} alt="" />
    </div>
    <div className="brand-box">
      <img src={imgpartner3} alt="" />
    </div>
    <div className="brand-box">
      <img src={imgpartner4} alt="" />
    </div>
    <div className="brand-box">
      <img src={imgpartner5} alt="" />
    </div>
  </div>
</>

   
  )
}

export default Home