import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const PostItem = ({
  content,
  user,
}) => (
  <div>
    <ul>{content}</ul>
    <a>{user}</a>
  </div>
);

export default connect(
  (state, { id })=>({
    ...state.byId[id],
  }),
  undefined,
)(PostItem);