import {ActionTypes, Roles} from '../config'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

export const STATUS_PENDING = '_PENDING';
export const STATUS_FULFILLED = '_FULFILLED';
export const STATUS_REJECTED = '_REJECTED';

const INITIAL_USER_STATE = {
    year: null,
}

const INITIAL_STREAM_STATE = {
}

function userReducer(state = INITIAL_USER_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_YEAR: {
      return {
        ...state,
        year: new Date().getFullYear()
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
  user: userReducer,
});

export default rootReducer
