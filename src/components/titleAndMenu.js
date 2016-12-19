import React, {Component, PropTypes} from 'react'
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
        <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas="" data-position="left" aria-hidden="true" data-offcanvas="y7t9hf-offcanvas">
          <div className="row column">
            <br/>
            <img className="thumbnail profile" src={profilePic}/>
            <h5 className="text-center">Contact Info</h5>
            <p className="linkToBlack">
              <a href="mailto:a.beaumon11@gmail.com?Subject=Awesome%20Website!">
                <i className="fa fa-envelope" aria-hidden="true"></i> a.beaumont11@gmail.com
              </a>
            </p>
            <p className="linkToBlack">
              <a href="tel:+17783500061">
                <i className="fa fa-phone" aria-hidden="true"></i> 778-350-0061
              </a>
            </p>
          </div>
        </div>
    )
  }
}
