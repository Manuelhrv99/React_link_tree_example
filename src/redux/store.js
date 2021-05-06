import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//Reducers
import UserReducer from './loginDucks'

const rootsReducer = combineReducers({
    users: UserReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function GenerateStore(){
    const store = createStore( rootsReducer, composeEnhancer(applyMiddleware(thunk)))
    return store;
}