import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import profilePic from "../images/profile.jpg";
import {RouterPaths} from "../config";
import TitleAndMenu from './titleAndMenu';
import { Field, reduxForm } from 'redux-form';
import selectField from './form/select-field'
import hardcoded from './form/text-field-hardcoded'

class Streampage extends Component {
  constructor() {
    super();
  }

  render() {
    const { sports, teams, link, onSelectSport, onSelectTeam } = this.props
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
           <div className="row">
              <div className="small-12 columns text-center">
                <h3>Stream Finder v3.0</h3>
              </div>
            </div>
            <div className="row">
              <div className="small-12 columns text-center">
                  <p>Welcome to the new and improved Sports Stream Finder!</p>
              </div>
            </div>
            <div className="row">
              <div className="small-12 columns text-center">
                <a href="https://github.com/a1astair/Reddit-Sport-Stream-Finder">
                  <p>Code</p>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="small-12 columns">
                  <Field name="sports" label="Pick a Sport" component={selectField} onChange={onSelectSport} optionList={sports}/>
              </div>
            </div>
            <div className="row">
              <div className="small-12 columns">
                  <Field name="teams" label="Pick a Team" component={selectField} props={{notNull: true}} onChange={onSelectTeam} optionList={teams}/>
              </div>
            </div>
            <div className="row">
              <div className="small-12 columns">
                  <Field name="link" label="Stream Link" component={hardcoded}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// Decorate the form component
Streampage = reduxForm({
  form: 'streamFinder' // a unique name for this form
})(Streampage);

export default Streampage
