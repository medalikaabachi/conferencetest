import { combineReducers } from 'redux';
import {authReducer} from './authReducer';
import {confReducer} from './confReducer';
import {articleReducer} from './articleReducer';


const rootReducer = combineReducers({
	authReducer,
	confReducer,
	articleReducer
})

export default rootReducer;