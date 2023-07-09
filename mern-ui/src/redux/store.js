import combinedReducers from './reducers/index'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(combinedReducers, compose(applyMiddleware(thunk)))

export default store;

