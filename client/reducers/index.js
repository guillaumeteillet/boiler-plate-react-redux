import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import dummyData from './dummyReducer';
import catData from './catReducer';

const rootReducer = combineReducers({dummyData, catData, routing: routerReducer });

export default rootReducer;
