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
        selectedSubreddit={this.props.selectedSubreddit}
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
    selectedSubreddit: state.stream.selectedSubreddit,
    teams: state.stream.teams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectSport: (event) => dispatch(getTeams(event.target.value)),
    onSelectTeam: (event) => dispatch(getLink(event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreampageContainer)
