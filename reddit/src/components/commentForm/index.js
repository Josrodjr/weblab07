import { v4 } from 'uuid';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../../style.css';

class CommentFormDummy extends React.Component {
  render() {
    const { onSubmit } = this.props;
    const id_value = this.props.id;
    return (
      <Fragment>
        <input className="commentbox" type="text" placeholder="Comentario" ref={ node => {this.contentInput = node;}}/>
        <button className="submitcomment"
        onClick={
          () => {
            onSubmit(
              id_value,
              this.contentInput.value, 
            );
            //clear the values
            this.contentInput.value = "";
          }
        }
        >Post</button>
      </Fragment>
    );
  }
};


export default connect(
  undefined,
  (dispatch) => ({
    onSubmit(id_value, content) {
      dispatch(actions.addComment(id_value, content));
    }
  }),
)(CommentFormDummy);  