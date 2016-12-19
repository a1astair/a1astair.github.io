import React, { Component } from 'react'

export default class SelectField extends Component {

  render() {
    const { input: { name, value }, meta: { invalid }, label, optionList, error, notNull, onChange } = this.props;

    return (
      <div className="row">
        <div className="small-4 columns"><label htmlFor={name}><strong>{label}:</strong></label>{error && <span className="alert label" ><i className="fi-x-circle"></i> {error}</span>}</div>
        <div className="small-8 columns">
          <select ref={name} onChange={onChange} disabled>
            {(optionList !== null) && optionList.map(current => (
              <option key={current.value} value={current.value}>{current.name}</option>))}
          </select>
        </div>
      </div>
    )
  }
}
