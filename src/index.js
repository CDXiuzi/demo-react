/**
 * The application entry.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'react-router';
import store from './createStore';
import Router from './routers';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createMemoryHistory(), store);

const App = () => (
  <Provider store={store}>
    <Router history={history} />
  </Provider>
);

export default App;
