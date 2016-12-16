//import axios from 'axios'
import { ActionTypes } from '../config'

export function getYear() {
  return dispatch => {
    dispatch({type: ActionTypes.GET_YEAR})
  }
}
