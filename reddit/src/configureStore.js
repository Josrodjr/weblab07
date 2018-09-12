import { createStore } from 'redux';
import posts from './reducers/posts';

const configureStore = () => {
  return createStore(
    posts,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
};

export default configureStore;