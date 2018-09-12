import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Posts from '../src/components/combinedPosts';

const store = configureStore();

//store.dispatch(actions.addPost(v4(), "HOLA", "JUANITO"));

ReactDOM.render(
  <Provider store={store}>
  <div>
    <Posts />
  </div>
  </Provider>,
  document.getElementById('root'),
);