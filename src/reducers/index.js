import {ActionTypes, Roles} from '../config'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

export const STATUS_PENDING = '_PENDING';
export const STATUS_FULFILLED = '_FULFILLED';
export const STATUS_REJECTED = '_REJECTED';

const INITIAL_USER_STATE = {
    copyRight: null,
    sports: {
      0: 'Hockey',
      1: 'Soccer',
      2: 'Football'
    },
    teams: null,
    link: null,
}

const INITIAL_STREAM_STATE = {
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
    // case ActionTypes.CREATE_REQUEST + STATUS_PENDING:
    //   return {
    //     ...state,
    //     inProgress: true,
    //     error: false
    //   };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  user: userReducer,
});

export default rootReducer
