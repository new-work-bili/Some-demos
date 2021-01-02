import { createStore,combineReducers } from 'redux';
import other from './other'
import num from './num'

//合并
const reducer = combineReducers({other,num});

export default createStore(reducer);