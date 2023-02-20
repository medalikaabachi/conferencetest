import { combineReducers } from 'redux';
import {authReducer} from './authReducer';
import {confReducer} from './confReducer';


const rootReducer = combineReducers({
	authReducer,
	confReducer
})

export default rootReducer;