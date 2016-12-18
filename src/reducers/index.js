import {ActionTypes, Roles} from '../config'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

export const STATUS_PENDING = '_PENDING';
export const STATUS_FULFILLED = '_FULFILLED';
export const STATUS_REJECTED = '_REJECTED';

const INITIAL_USER_STATE = {
    copyRight: null,
}

const INITIAL_STREAM_STATE = {
  sports: {
    nhlstreams: 'Hockey',
    soccerstreams: 'Soccer',
    nflstreams: 'Football',
    mlbstreams: 'Baseball'
  },
  teams: null,
  link: null,
  inProgress: false,
  error: null,
}

function userReducer(state = INITIAL_USER_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_YEAR: {
      return {
        ...state,
        copyRight: `© Copyright ${new Date().getFullYear()} Alastair Beaumont`
      };
    }

    default:
      return state;
  }
}

//This will be the stream state reducer
function streamReducer(state = INITIAL_STREAM_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_TEAMS + STATUS_PENDING:
      return {
        ...state,
        inProgress: true,
      };
    case ActionTypes.GET_TEAMS + STATUS_FULFILLED:
      return {
        ...state,
        inProgress: false,
        teams: action.payload
      };
    case ActionTypes.GET_TEAMS + STATUS_REJECTED:
      return {
        ...state,
        inProgress: false,
        error: action.payload
      };
    case ActionTypes.GET_LINK + STATUS_PENDING:
      return {
        ...state,
        inProgress: true,
      };
    case ActionTypes.GET_LINK + STATUS_FULFILLED:
      return {
        ...state,
        inProgress: false,
        link: action.payload
      };
    case ActionTypes.GET_LINK + STATUS_REJECTED:
      return {
        ...state,
        inProgress: false,
        error: action.payload
      };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  user: userReducer,
  stream: streamReducer,
});

export default rootReducer
