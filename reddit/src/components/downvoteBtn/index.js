import { v4 } from 'uuid';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../../style.css';

class DownvoteBtn extends React.Component {
  render() {
    const { onSubmit } = this.props;
    const id_value = this.props.id;
    return (
      <Fragment>
        <button className="downbtn"
        onClick={
          () => {
            onSubmit(
              id_value,
            );
          }
        }
        >DOWNVOTE</button>
      </Fragment>
    );
  }
};


export default connect(
  undefined,
  (dispatch) => ({
    onSubmit(id_value) {
      dispatch(actions.addDownvote(id_value));
    }
  }),
)(DownvoteBtn);  