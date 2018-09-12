import { v4 } from 'uuid';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../../style.css';

class UpvoteBtn extends React.Component {
  render() {
    const { onSubmit } = this.props;
    const id_value = this.props.id;
    return (
      <Fragment>
        <button className="upbtn"
        onClick={
          () => {
            onSubmit(
              id_value,
            );
          }
        }
        >UPVOTE</button>
      </Fragment>
    );
  }
};


export default connect(
  undefined,
  (dispatch) => ({
    onSubmit(id_value) {
      dispatch(actions.addUpvote(id_value));
    }
  }),
)(UpvoteBtn);  