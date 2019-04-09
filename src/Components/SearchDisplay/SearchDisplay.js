import React, { Component } from 'react'
import StarContext from '../../Context/StarSearchContext';

export class SearchDisplay extends Component {
  static contextType = StarContext;
  render() {
    const { results } = this.context;
    console.log(results)
    return (
      <div>
        {results.map((el, i) => <p key={i}>{el.name}{el.title}</p>)}
      </div>
    )
  }
}

export default SearchDisplay
