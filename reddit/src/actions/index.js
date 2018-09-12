import * as types from '../types';

export const addPost = (
  id,
  content,
  user,
) => ({
  type: types.ADDED_POST,
  payload: {
    id,
    content,
    user,
  }
});

export const addComment = (
  post_id,
  user,
  content,
) => ({
  type: types.ADDED_COMMENT,
  payload: {
    post_id,
    user,
    content,
  }
});