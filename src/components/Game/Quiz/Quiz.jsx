import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Quiz.scss';
import Input from '../../commons/Input/Input';

class Quiz extends Component {
  render() {
    return (
      <div className="grabGame row shadow-3 radius-1 text-white black-opacity-3 shadow-5">
        <div className="medium-v-padding ">
          <form>
            <div
              id="question"
              className="card radius-3 bold large-text text-white center-align"
            />
            <div id="country" className="hide" />
            <div className="row">
              <div className="small-screen-3 medium-screen-3 large-screen-3">
                <Input name="name" type="type" className="medium-text large-screen-3 grey-opacity" />
              </div>
              <div className="small-screen-1 medium-screen-1 large-screen-1">
                <button
                  type="submit"
                  className="submit radius-4 button radius-5 primary text-white center-align large-h-padding large-text"
                >
                  Answer
                </button>
              </div>
            </div>
            <div className="divider"> </div>
          </form>
          <br />
        </div>
        <div className="divider"> </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Quiz);
