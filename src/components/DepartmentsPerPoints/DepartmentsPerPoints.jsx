import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Levels extends Component {
  render() {
    const { levels } = this.props;

    console.log('buzz', levels);
    return (
      <div className="medium-padding row">
        <table className="table">
          <tr className="left-align">
            <th>#</th>
            <th>Level</th>
            <th>Pt</th>
          </tr>
          {(levels || [{ level: 'Geo', points: 1 }]).map((level, index) => {
            return (
              <tr key={index} >
                <td>{index + 1}</td>
                <td>{level.level}</td>
                <td>{level.points}</td>
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
