import { v4 } from 'uuid';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PostFormDummy extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <Fragment>
        <input type="text" placeholder="Contenido" ref={ node => {this.contentInput = node;}}/>
        <input type="text" placeholder="Username" ref={ node => {this.userInput = node;}}/>
        <button
        onClick={
          () => {
            onSubmit(
              this.contentInput.value, 
              this.userInput.value,
            );
            //clear the values
            this.contentInput.value = "";
            this.userInput.value = "";
          }
        }
        >Post</button>
      </Fragment>
    );
  }
};


export default connect(
  undefined,
  dispatch => ({
    onSubmit(content, user) {
      dispatch(actions.addPost(v4(), content, user));
    }
  })
)(PostFormDummy);