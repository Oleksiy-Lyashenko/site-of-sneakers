import { combineReducers } from 'redux';
import countReducer from './count';
import visibleReducer from './visible';

const rootReducer = combineReducers({
  count: countReducer,
  visible: visibleReducer,
});

export default rootReducer;