import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import location from './location'
import videos from './videos'
import selectedVideo from './selectedVideo'

export default combineReducers({
    loadingBar: loadingBarReducer,
    location,
    videos,
    selectedVideo
 })