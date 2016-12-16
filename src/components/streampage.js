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
              <div className="small-12 columns text-center">
                <p>Stream Page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
