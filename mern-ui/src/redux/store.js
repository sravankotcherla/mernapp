import combinedReducers from './reducers/index'
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;

