import {createStore,compose,applyMiddleware} from "redux"


import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducer"
const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store=createStore(rootReducer,compose(applyMiddleware(thunk),devtools))