/**
 * The file is reducer entry.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import { combineReducers } from 'redux';
import { USER_UID } from '../actions/types';

// reducers
import { routerReducer } from 'react-router-redux';

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
  uid,
  routing: routerReducer
};

export default combineReducers(reducer);
