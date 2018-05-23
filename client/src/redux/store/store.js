import { createStore, compose,  applyMiddleware  } from 'redux';
import initialDataLoad from '../reducers/reducer';
import thunk from 'redux-thunk';

export function configureStore(initialState = {}) {
  const store = createStore(initialDataLoad, initialState, compose(applyMiddleware(thunk)));
  return store;
}
