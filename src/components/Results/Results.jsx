import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Results extends Component {

  render() {
    const { results } = this.props;
    return (
      <div className="medium-padding row">
        <table className="table">
          <tr className="left-align">
            <th>#</th>
            <th>Level</th>
            <th>Pt</th>
          </tr>

          {
            results.map((result, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.level}</td>
                <td>{result.points}</td>
              </tr>
            })
          }
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ results }) => ({
  results
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
