/**
 * The store.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

// Created the store.
const store = createStore(reducer, applyMiddleware(
  thunkMiddleware // 异步插件
));

export default store;
