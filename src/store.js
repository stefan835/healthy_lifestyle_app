import {createStore, combineReducers} from 'redux'

import userData from './state/userData'

const reducer = combineReducers({
  userData
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store