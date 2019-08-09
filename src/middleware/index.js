import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import logger from './logger';

export default applyMiddleware(thunk, loadingBarMiddleware(), logger)