import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Levels extends Component {
  render() {
    const { levels } = this.props;
    return (
      <div className="medium-padding row">
        <table className="table">
          <tr className="left-align">
            <th>#</th>
            <th>Level</th>
            <th>Pt</th>
          </tr>

          {levels.map((result, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.level}</td>
                <td>{result.points}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ levels }) => ({
  levels
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Levels);
