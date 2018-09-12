import { combineReducers } from 'redux';
import * as types from '../types';

//para el arreglo de los ids de posts que haya
const byId = (state = {}, action) => {
  switch (action.type) {
    case types.ADDED_POST: {
      const { id } = action.payload;
      //build the pogo

      const freshpost = {
        id: action.payload.id,
        content: action.payload.content,
        user: action.payload.user,
        upvotes: 0,
        downvotes: 0,
        comments_ids: [],
      }

      return {
        ...state,
        [id]: freshpost, 
      };
    }
    default: return state;
  }
};

//agregar el contenido del post
const orden = (state = [], action) => {
  switch (action.type) {
    case types.ADDED_POST: {
      const { id } = action.payload;
      return [
        ...state,
        id,
      ];
    }
    default: return state;
  }
};

const posts = combineReducers({
  byId,
  orden,
});

export default posts;


//hacer un par de selectores
export const getPostbyId = (state, id) => state.byId[id];
export const getallPosts = (state) => state.orden.map(
  id => getPostbyId(state, id),
);