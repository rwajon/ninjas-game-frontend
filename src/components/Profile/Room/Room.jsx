import React from 'react';
import { connect } from 'react-redux';
import { gameAction } from '../../../actions';
import Button from '../../commons/Button';
import Input from '../../commons/Input/Input';
import './Room.scss';
import { compareUser, socketIOClient } from '../../../helpers';

class Room extends React.Component {
  state = {
    roomName: '',
    showModal: false
  };

  componentDidMount() {
    const { profile, createRoom } = this.props;
    socketIOClient.on('createdRoom', room => {
      if (compareUser(profile, room.owner)) {
        createRoom(room);
        window.location.replace(`/game/${room.name}`);
      } else {
        alert('Sorry, this room already exists');
      }
    });
  }

  displayModal = () => {
    this.setState({
      showModal: true
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  handleInput = e => {
    this.setState({ roomName: e.target.value });
  };

  addRoom = e => {
    e.preventDefault();
    const { roomName } = this.state;
    const { profile } = this.props;
    socketIOClient.emit('createRoom', profile, roomName);
    this.setState({
      showModal: false
    });
  };

  render() {
    const { roomName, showModal } = this.state;

    return (
      <div className="container">
        <div className="card center-align">
          <Button
            text="Create a room"
            type="button"
            onClick={e => this.displayModal()}
            className="radius-4 button danger radius-5 text-white large-h-padding shadow-3 large-text"
          />
          <div id="modal" className={showModal ? '' : 'hide'}>
            <form onSubmit={this.addRoom}>
              <div className="modal-content">
                <span className="close" onClick={this.closeModal}>
                  &times;
                </span>
                <div className="text-black center-align h2">
                  <h2>Create your room</h2>
                </div>
                <br />
                <Input
                  name="roomName"
                  type="text"
                  value={roomName}
                  onChange={this.handleInput}
                  className="medium-text large-screen-4 grey-opacity medium-padding input"
                />
                <button type="submit" className="medium-text modal-button">
                  ADD
                </button>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.user.profile,
    room: state.game.room
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createRoom: room => dispatch(gameAction.createRoom(room))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
