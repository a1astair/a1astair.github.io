import React, {Component, PropTypes} from 'react'

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="footer">
        <div className="row">
          <div className="small-12 columns align-left">
            <p><small>{this.props.copyRight}</small></p>
          </div>
        </div>
      </div>
    )
  }
}
