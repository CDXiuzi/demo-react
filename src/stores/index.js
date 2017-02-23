import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducers);

export default store;
