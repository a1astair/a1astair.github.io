import React, { Component } from 'react'

export default class SelectField extends Component {

  render() {
    const { input: { name, value }, meta: { invalid }, label, optionList, error, notNull } = this.props;
    const inputOnChange = this.props.input.onChange;
    const onChange = this.props.onChange;

    const doBothOnChange = function(event) {
      if (typeof inputOnChange === "function") {
        inputOnChange(event);
      }
      if (typeof onChange === "function") {
        onChange(event);
      }
    };

    let emptyValue = (<option value="">Select from pulldown....</option>);
    if (notNull) {
      emptyValue = null;
    }

    return (
      <div className="row">
        <div className="small-4 columns"><label htmlFor={name}><strong>{label}:</strong></label>{error && <span className="alert label" ><i className="fi-x-circle"></i> {error}</span>}</div>
        <div className="small-8 columns">
          <select ref={name} value={value} onChange={doBothOnChange}>
            { emptyValue }
            {(optionList !== null) && optionList.map(current => (
              <option key={current.value} value={current.value}>{current.name}</option>))}
          </select>
        </div>
      </div>
    )
  }
}
