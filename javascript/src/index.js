import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';

import PixelArtContainer from './components/pixel_art_container';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(promise));

const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <PixelArtContainer />
  </Provider>
  , document.querySelector('.container'));
