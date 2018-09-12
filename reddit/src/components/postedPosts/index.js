import React, { Fragment } from 'react';
import { connect } from 'react-redux';
//falta hacer los selectores para esto
import * as selectors from '../../reducers/posts';
//falta hacer el dummy de post
import PostItem from '../postItem';

const AllPosts = ({ posts = [] }) => (
  <Fragment>
    <ul>
      {
        posts.length > 0
        ? posts.map(({ id }) => <PostItem key={id} id={id} />)
        : <a>NO POSTS, ADD ONE</a>
      }
    </ul>
  </Fragment>
);

export default connect(
  state => ({
    posts: selectors.getallPosts(state),
  }),
  undefined,
)(AllPosts);