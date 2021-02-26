import {createStore} from 'redux';
import rootreducer from './reduce';
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(rootreducer,composeWithDevTools());

export default store;