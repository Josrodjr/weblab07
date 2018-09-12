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
  content,
) => ({
  type: types.ADDED_COMMENT,
  payload: {
    post_id,
    content,
  }
});

export const addUpvote = (id) => ({
  type: types.UPVOTE,
  payload: {
    id,
  }
});

export const addDownvote = (id) => ({
  type: types.DOWNVOTE,
  payload: {
    id,
  }
});