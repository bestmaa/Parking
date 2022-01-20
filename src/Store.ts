import {combineReducers,applyMiddleware,createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { parkingDeitals } from './Reducer/parkingreducer';

const reducer=combineReducers({
    parkingDeitals:parkingDeitals
})

let initState={};

const middleware=[thunk]

const Store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)))

export default Store;