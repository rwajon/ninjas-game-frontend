import React, { Component } from 'react';
import Button from '../../commons/Button';
import '../../../assets/css/style.scss';
import Room from '../Room/Room';

export default class Buttons extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="row text-white">
          <div className="card no-margin center-align">
            <br />
            <Room />
            <Button
              text="End Game"
              type="button"
              bgColor="danger"
              className="radius-4 button radius-5 text-white large-h-padding shadow-3 large-text"
            />
            <div className="clear" />
            <br />
            <Button
              text="Leave"
              type="button"
              className="radius-4 button danger radius-5 text-white large-h-padding shadow-3 large-text"
            />
          </div>
          <div className="clear" />
          <br />
        </div>
      </div>
    );
  }
}
