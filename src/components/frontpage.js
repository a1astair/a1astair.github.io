import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {RouterPaths} from "../config";
export default class FrontPage extends Component {
  constructor() {
    super();
  }

  render() {
    const copyRight = `© Copyright ${this.props.year} Alastair Beaumont`
    return (
    <div>
      <div className="row">
        <div className="small-12 medium-6 columns text-center">
          <p>Experienced Software Developer with a demonstrated history of working in the Information Technology and services industry.</p>
        </div>
        <div className="small-12 medium-6 columns text-center">
          <p>I love learning new technologies, building software and web apps! Check out my Github to see how my projects work. That includes this website and the Stream Finder!</p>
        </div>
      </div>
      <div className="row">
        <div className="small-12 medium-6 columns text-center">
          <p className="show-for-medium">The Stream Finder is a web app that uses the Reddit API to find streams for the sport of your choice!</p>
        </div>
        <div className="small-12 medium-6 columns text-center show-for-medium-up">
          <p className="show-for-medium">Drop me a line using my Contact Info in the Menu Bar or click any of the links below</p>
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
    </div>
    )
  }
}
