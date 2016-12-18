import React, {Component, PropTypes} from 'react'
import {RouterPaths} from "../config";
import FrontPage from './frontpage'
import TitleAndMenu from './titleAndMenu'
import Footer from './footer';
import {Link} from 'react-router';

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
          <TitleAndMenu/>
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
          <FrontPage/>
          <Footer copyRight={this.props.copyRight}/>
          </div>
        </div>
      </div>
    )
  }
}
