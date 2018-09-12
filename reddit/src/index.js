import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Posts from '../src/components/combinedPosts';

import './style.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <div>
    <Posts />
    <div className="bug">solo se ven los comentarios ingresados despues de upvotear</div>
  </div>
  </Provider>,
  document.getElementById('root'),
);