import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTeams, getLink, setSubreddit } from '../actions'

import Streampage from '../components/streampage'

class StreampageContainer extends Component {

  render() {
    return (
      <Streampage
        initialValues={this.props.initialValues}
        sports={this.props.sports}
        teams={this.props.teams}
        link={this.props.link}
        onSelectSport={this.props.onSelectSport}
        selectedSubreddit={this.props.selectedSubreddit}
        pickedSubreddit={this.props.pickedSubreddit}
        onSelectTeam={this.props.onSelectTeam}
        noTeams={this.props.noTeams}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: {
      sports: state.stream.sports,
      teams: state.stream.teams,
      link: state.stream.link
    },
    sports: state.stream.sports,
    selectedSubreddit: state.stream.selectedSubreddit,
    teams: state.stream.teams,
    noTeams: state.stream.noTeams,
    link: state.stream.link
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectSport: (subreddit) => dispatch(getTeams(subreddit)),
    pickedSubreddit: (subreddit) => dispatch(setSubreddit(subreddit)),
    onSelectTeam: (subreddit, team) => dispatch(getLink(subreddit, team)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreampageContainer)
