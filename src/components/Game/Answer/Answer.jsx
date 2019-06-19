import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Answer.scss';
import defaultPicture from '../../../assets/images/profile_plaholder.png';
const Answer = props => {
  const { results } = props;
  return (
    <div className="small-padding">
      {results.map((result, index) => {
        return (
          <div
            className={`oneResult ${result.point ? 'correct' : 'wrong'}`}
            key={index}
          >
            {result.name}
            <span>{result.point}</span>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ game: { results } }) => ({
  results
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer);
