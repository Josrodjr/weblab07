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
        comments: ['Comments: '],
      }

      return {
        ...state,
        [id]: freshpost, 
      };
    }

    case types.ADDED_COMMENT: {
      const id  = action.payload.post_id;
      const modified_post = state[id];
      const { comments } = modified_post;

      modified_post.comments.push(action.payload.content)

      console.log(modified_post);

      return {
        ...state,
        id: {
          modified_post
        }
      }
    }

    case types.UPVOTE: {
      const id  = action.payload.id;
      const modified_post = state[id];

      modified_post.upvotes += 1;

      console.log(modified_post);

      return {
        ...state,
        id: {
          modified_post
        }
      }
    }

    case types.DOWNVOTE: {
      const id  = action.payload.id;
      const modified_post = state[id];

      modified_post.downvotes += 1;

      console.log(modified_post);

      return {
        ...state,
        id: {
          modified_post
        }
      }
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