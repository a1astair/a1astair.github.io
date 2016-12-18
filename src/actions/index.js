import axios from 'axios'
import { ActionTypes, LOAD_TEAMS_WEB_SERVICE_URL, GET_LINK_WEB_SERVICE_URL} from '../config'

export function getYear() {
  return dispatch => {
    dispatch({type: ActionTypes.GET_YEAR})
  }
}

export function getTeams(subreddit) {
  return dispatch => {
    dispatch({
      type: ActionTypes.SEND_LOGIN_INFO,
      payload: axios({
        method: 'post',
        url: LOAD_TEAMS_WEB_SERVICE_URL,
        data: {
          subreddit: subreddit,
        },
      })
      .then(function(response) {
          return (response)
        })
      .catch(function(error) {
          return (error)
        })
    })
  }
}

export function getLink(subreddit, team) {
  return dispatch => {
    dispatch({
      type: ActionTypes.SEND_LOGIN_INFO,
      payload: axios({
        method: 'post',
        url: GET_LINK_WEB_SERVICE_URL,
        data: {
          subreddit: subreddit,
          team: team,
        },
      })
      .then(function(response) {
          return (response)
        })
      .catch(function(error) {
          return (error)
        })
    })
  }
}
