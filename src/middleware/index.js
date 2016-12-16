import { LOCATION_CHANGE } from 'react-router-redux'

// hook into any action without to use the reducer
export default store => next => action => {
  if (action.type === LOCATION_CHANGE) {
    // console.log('page changed')
  }
  return next(action)
}
