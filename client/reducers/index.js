import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import dummyData from './dummyReducer';

const rootReducer = combineReducers({dummyData, routing: routerReducer });

export default rootReducer;
