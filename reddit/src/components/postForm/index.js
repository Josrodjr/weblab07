import { v4 } from 'uuid';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../../style.css';

class PostFormDummy extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <Fragment>
        <input className="posttextarea" type="text" placeholder="Contenido" ref={ node => {this.contentInput = node;}}/>
        <input className="usernamearea" type="text" placeholder="Username" ref={ node => {this.userInput = node;}}/>
        <button className="submitpost"
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