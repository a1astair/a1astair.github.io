import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Paths } from '../config'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="top-bar" id="navigation-menu">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text-name">
                <Link to={Paths.ROOT} title="Dashboard" className="DashboardTitle"><h2 className="titleText">Alastair Beaumont</h2></Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}
