/**
 * The file is reducer entry.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import { combineReducers } from 'redux';
import { USER_UID, STATUS_BAR } from '../actions/types';

// reducers
import { routerReducer } from 'react-router-redux';
import statusBar from './statusBar';

/**
 * The uid store.
 *
 * @param {Number} state
 * @param {String} options.type action type
 * @param {Number} options.uid new state
 * @return {Number}
 * @author Seven Du <shiweidu@outlook.com>
 * @homepage http://medz.cn
 */
const uid = (state = 0, { type, uid }) => (
  type === USER_UID ? uid : state
);

// Created reducer.
const reducer = {
  [USER_UID]: uid,
  [STATUS_BAR]: statusBar,
  routing: routerReducer
};

export default combineReducers(reducer);
