import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import CommentFormDummy from '../commentForm';
import UpvoteBtn from '../upvoteBtn';
import DownvoteBtn from '../downvoteBtn';

import '../../style.css';

const PostItem = ({
  id,
  content,
  user,
  comments,
  upvotes,
  downvotes,
}) => (
  <div>
    <a className="postcontent">"{content}"</a>
    <ul className="postuser">--{user}</ul>
    <h4>KARMA: {upvotes-downvotes}</h4>
    <UpvoteBtn id={id} />
    <DownvoteBtn id={id} />
    <CommentFormDummy id={id} />

    <div>        
      {
        comments.map(function(comment){                                        
          return (
          <div key ={id} className="comment">
          {comment}
          </div>
        );                
      })
      }        
    </div>


  </div>
);

export default connect(
  (state, { id })=>({
    ...state.byId[id],
  }),
  undefined,
)(PostItem);