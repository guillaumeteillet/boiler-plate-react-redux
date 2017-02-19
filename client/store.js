import { createStore, compse} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/index'

import dummyData from './data/dummyData'

const defaultState = {
  dummyData
}

const store = createStore(rootReducer, defaultState)

const history = syncHistoryWithStore(browserHistory, store)

export default store 
export history
