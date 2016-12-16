import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Streampage from '../components/streampage'

class PageStreampage extends Component {

  render() {
    return (
      <Streampage
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageStreampage)
