import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;