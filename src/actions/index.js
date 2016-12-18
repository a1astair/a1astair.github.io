import axios from 'axios'
import { ActionTypes, GET_TEAMS_WEB_SERVICE_URL, GET_LINK_WEB_SERVICE_URL} from '../config'

export function getYear() {
  return dispatch => {
    dispatch({type: ActionTypes.GET_YEAR})
  }
}

export function getTeams(subreddit) {
  return dispatch => {
    dispatch({type: ActionTypes.GET_TEAMS, payload: axios.get(GET_TEAMS_WEB_SERVICE_URL(subreddit)), selectedSubreddit: subreddit});
  }
}

export function getLink(team, subreddit = 'soccerstreams') {
  return dispatch => {
    dispatch({type: ActionTypes.GET_LINK, payload: axios.get(GET_LINK_WEB_SERVICE_URL(subreddit, team))});
  }
}
