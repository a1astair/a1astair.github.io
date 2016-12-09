import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Dashboard from '../components/dashboard'

class PageDashboard extends Component {

  render() {
    return (
      <Dashboard
      />
    )
  }
}

PageDashboard.propTypes = {
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDashboard)
