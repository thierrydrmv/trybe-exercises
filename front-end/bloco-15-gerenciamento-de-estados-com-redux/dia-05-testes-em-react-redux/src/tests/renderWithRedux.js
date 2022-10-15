import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import clickReducer from '../redux/reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux;