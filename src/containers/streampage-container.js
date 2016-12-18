import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Streampage from '../components/streampage'

class StreampageContainer extends Component {

  render() {
    return (
      <Streampage
        initialValues={this.props.initialValues}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: {
      sports: state.user.sports,
      teams: state.user.teams,
      link: state.user.link
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreampageContainer)
