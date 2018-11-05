import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducer from "../reducers";
import {DATA_FETCHING_INTERVAL} from '../constants'; 
import rootSaga from '../sagas';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer, 
  applyMiddleware(sagaMiddleware)
); 

// Trigger the fetching of nodes and bots data
setInterval(() => sagaMiddleware.run(rootSaga), DATA_FETCHING_INTERVAL);

export default store;