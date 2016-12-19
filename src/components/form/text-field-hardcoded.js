import React, { Component } from 'react'

export default class TextFieldHardcoded extends Component {
  render() {
    const { input: { name, value, onChange }, label, error, gotLink } = this.props

    if (gotLink === 'Waiting...') {
      return (
        <div className="row">
          <div className="small-4 columns"><label htmlFor={name}><strong>{label}:</strong></label>{error && <span className="alert label" ><i className="fi-x-circle"></i> {error}</span>}</div>
          <div className="small-8 columns"><p ref={name} style={{paddingLeft: '0.5rem'}}>{value}</p></div>
        </div>
      )
    }
    return (
      <div className="row">
        <div className="small-4 columns"><label htmlFor={name}><strong>{label}:</strong></label>{error && <span className="alert label" ><i className="fi-x-circle"></i> {error}</span>}</div>
        <div className="small-8 columns"><a ref={name} style={{paddingLeft: '0.5rem'}} href={value} target="_blank">{value}</a></div>
      </div>
    )
  }
}
