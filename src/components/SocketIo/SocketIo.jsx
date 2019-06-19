import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../commons/Input/Input';
import '../../assets/css/style.scss';
import socketIOClient from '../../helpers/socketIOClient';

class SocketIo extends Component {
  state = {
    input: ''
  };

  componentDidMount = () => {
    socketIOClient.on('typing', input => {
      this.setState({
        input
      });
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
    socketIOClient.emit('typing', e.target.value);
  };

  render() {
    return (
      <div>
        <div className="input-field">
          <Input
            name="name"
            type="text"
            className="medium-text grey-opacity large-screen-2"
            onChange={this.handleChange}
            value={this.state.input}
            autoComplete="off"
          />
        </div>
        <div className="card white large-screen-2">{this.state.input}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocketIo);
