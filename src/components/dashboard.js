import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import profilePic from "../images/profile.jpg";
import {RouterPaths} from "../config";
export default class Dashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.foundationReload();
  }

  render() {
    const copyRight = `© Copyright ${this.props.year} Alastair Beaumont`
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper="">
          <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas="" data-position="left" aria-hidden="true" data-offcanvas="y7t9hf-offcanvas">
            <div className="row column">
              <br/>
              <img className="thumbnail" src={profilePic}/>
              <h5 className="text-center">Contact Info</h5>
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i> a.beaumont11@gmail.com
              </p>
              <p>
                <i className="fa fa-phone" aria-hidden="true"></i> 778-350-0061
              </p>
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
                  <Link to ={RouterPaths.ROOT}>
                    <h1 className="title">Alastair Beaumont</h1>
                  </Link>
                </div>
              </div>
            <hr/>
            <div className="row">
              <div className="small-12 medium-6 columns text-center">
                <p>I am a Computer Science Graduate from the University of Victoria. I love learning new technologies, building software, and web apps!</p>
              </div>
              <div className="small-12 medium-6 columns text-center">
                <p className="show-for-medium">Check out my Github to see how my projects work. That includes this website and the Stream Finder!</p>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-6 columns text-center">
                <p>Drop me a line using my Contact Info in the Menu Bar or click any of the links below</p>
              </div>
              <div className="small-12 medium-6 columns text-center show-for-medium-up">
                <p className="show-for-medium">The Stream Finder is a web app that uses the Reddit API to find streams for the sport of your choice!</p>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="small-12 columns text-center">
                <h3>Links</h3>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="small-6 medium-3 columns text-center">
                <a href="http://www.github.com/a1astair" target='_blank'>
                  <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                  <p>Github</p>
                </a>
              </div>
              <div className="small-6 medium-3 columns text-center">
                <a href="https://www.linkedin.com/in/alastair-beaumont-a37a29b0" target='_blank'>
                  <i className="fa fa-linkedin fa-5x" aria-hidden="true"></i>
                  <p>LinkedIn</p>
                </a>
              </div>
              <br/>
              <div className="small-6 medium-3 columns text-center">
                <a href="./AlastairBeaumontResume.pdf" target='_blank'>
                  <i className="fa fa-file fa-5x" aria-hidden="true"></i>
                  <p>Resume</p>
                </a>
              </div>
              <br/>
              <div className="small-6 medium-3 columns text-center">
                <Link to={RouterPaths.STREAM}>
                  <i className="fa fa-futbol-o fa-5x" aria-hidden="true"></i>
                  <p>Stream Finder</p>
                </Link>
              </div>
            </div>
            <div id="footer">
              <div className="row">
                <div className="small-12 columns align-left">
                  <p><small>{copyRight}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
