import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';
import { userAction } from '../../actions';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  padding-top: 15%;
`;

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    const {
      getProfile,
      match: {
        params: { token }
      }
    } = this.props;

    getProfile({ token }).then(data => {
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const [{ isAuth, errors }, { loading }] = [this.props, this.state];
    return (
      <div>
        {errors ? (
          <div className="center-align danger text-white large-padding large-text">
            {errors.token || errors.message || errors}
          </div>
        ) : (
          ''
        )}

        {loading ? (
          <div className="center-align">
            <BeatLoader
              css={override}
              sizeUnit={'px'}
              size={150}
              color={'#fff'}
              loading={loading}
            />
            <div className="text-white large-h-padding xxlarge-text">
              Loading...
            </div>
          </div>
        ) : (
          ''
        )}
        {isAuth ? window.location.replace('/game') : ''}
      </div>
    );
  }
}

Auth.defaultProps = {
  isAuth: false
};

Auth.propTypes = {
  errors: PropTypes.object,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = ({ user: { isAuth, errors } }) => ({
  isAuth,
  errors
});

const mapDispatchToProps = dispatch => ({
  getProfile: payload => dispatch(userAction.getProfile(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
