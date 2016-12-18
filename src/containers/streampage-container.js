import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTeams, getLink } from '../actions'

import Streampage from '../components/streampage'

class StreampageContainer extends Component {

  render() {
    return (
      <Streampage
        initialValues={this.props.initialValues}
        sports={this.props.sports}
        teams={this.props.teams}
        onSelectSport={this.props.onSelectSport}
        onSelectTeam={this.props.onSelectTeam}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: {
      link: state.stream.link
    },
    sports: state.stream.sports,
    teams: state.stream.teams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectSport: dispatch(getTeams(event)),
    onSelectTeam: dispatch(getLink(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreampageContainer)
