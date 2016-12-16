import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import profilePic from "../images/profile.jpg";
export default class Dashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.foundationReload();
  }

  render() {
    return (
        <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper="">
        <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas="" data-position="left" aria-hidden="true" data-offcanvas="y7t9hf-offcanvas">
        <div className="row column">
        <br/>
        <img className="thumbnail" src={profilePic}/>
        <h5 className="text-center">Contact Info</h5>
        <p><i className="fa fa-envelope" aria-hidden="true"></i> a.beaumont11@gmail.com</p>
        <p><i className="fa fa-phone" aria-hidden="true"></i> 778-350-0061</p>
        </div>
        </div>
        <div className="off-canvas-content" data-off-canvas-content="">
        <div className="title-bar hide-for-large">
        <div className="title-bar-left">
        <button className="menu-icon" type="button" data-open="my-info" aria-expanded="false" aria-controls="my-info"></button>
        <span className="title-bar-title"></span>
        </div>
        </div>
        <div className="callout primary">
        <div className="row column">
        <h1>Alastair Beaumont</h1>
        </div>
        </div>
        <hr/>
        <div className="row">
          <div className="small-12 medium-8 columns medium-offset-2 text-center">
            <p>I am a Computer Science Graduate from the University of Victoria. I love learning new technologies, building software, and web apps!</p>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row">
          <div className="small-3 columns text-center">
            <a href="http://www.github.com/a1astair">
              <i className="fa fa-github fa-5x" aria-hidden="true"></i>
              <p>Github</p>
            </a>
          </div>
          <div className="small-3 columns text-center">
            <a href="https://www.linkedin.com/in/alastair-beaumont-a37a29b0">
              <i className="fa fa-linkedin fa-5x" aria-hidden="true"></i>
              <p>LinkedIn</p>
            </a>
          </div>
          <br/>
          <div className="small-3 columns text-center">
            <a href="./AlastairBeaumontResume.pdf">
              <i className="fa fa-file fa-5x" aria-hidden="true"></i>
              <p>Resume</p>
            </a>
          </div>
          <br/>
          <div className="small-3 columns text-center">
            <Link to={`/streamFinder`}>
              <i className="fa fa-futbol-o fa-5x" aria-hidden="true"></i>
              <p>Steam Finder</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
