import React from 'react'
import img from '../img/xe5.png'
import imgfolder from '../img/folder.png'

const About = () => {
  return (
    <><div className="container">
    <div className="us-story">
      <div className="story-img">
        <img src={img} alt="" />
      </div>
      <div className="story-content">
        <div className="story-header">
          <h1>Elehaus Story, We Craft Awesome With Great Experiences.</h1>
        </div>
        <div className="story-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minimo veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex eatrl commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptat velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
    <div className="team-content">
      <h2>OUT TEAM</h2>
      <div className="team-wrap">
        <div className="team-box">
          <div className="team-img">
            <img src={imgfolder} alt="#" />
          </div>
          <div className="media">
            <div className="team-info">
              <h4>Raymond Atkins</h4>
              <p>Chif Admin</p>
            </div>
            <div className="media-icon">
              <div className="icon-box">
                <i className="fa-brands fa-facebook-f" />
              </div>
              <div className="icon-box">
                <i className="fa-brands fa-twitter" />
              </div>
              <div className="icon-box">
                <i className="fa-brands fa-instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-box">
          <div className="team-img">
            <img src={imgfolder} alt="#" />
          </div>
          <div className="media">
            <div className="team-info">
              <h4>Raymond Atkins</h4>
              <p>Chif Admin</p>
            </div>
            <div className="media-icon">
              <div className="icon-box">
                <i className="fa-brands fa-facebook-f" />
              </div>
              <div className="icon-box">
                <i className="fa-brands fa-twitter" />
              </div>
              <div className="icon-box">
                <i className="fa-brands fa-instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-box">
          <div className="team-img">
            <img src={imgfolder} alt="#" />
          </div>
          <div className="media">
            <div className="team-info">
              <h4>Raymond Atkins</h4>
              <p>Chif Admin</p>
            </div>
            <div className="media-icon">
              <div className="icon-box">
                <i className="fa-brands fa-facebook-f" />
              </div>
              <div className="icon-box">
                <i className="fa-brands fa-twitter" />
              </div>
              <div className="icon-box">
                <i className="fa-brands fa-instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </>
  )
}

export default About