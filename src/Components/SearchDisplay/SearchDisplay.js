import React, { Component } from 'react'
import StarContext from '../../Context/StarSearchContext';
import './SearchDisplay.css'
import loadingpic from '../../Images/saber.gif'

export class SearchDisplay extends Component {
  static contextType = StarContext;

  renderSearchResults(){
    return ( <p className='searchResults'>Are these the <span className='strike-through'>driod</span> data you are looking for</p>)
  }
  renderLoading(){
    return (
      <img className='col-6' src={loadingpic} alt='intense saber fight'></img>
    )
  }
  render() {
    const { results } = this.context;
    return (
      <div className='searchResults-container row'>
        {this.context.isLoading ? this.renderLoading() : ''}
        {results.length <= 0 ? '' : this.renderSearchResults()}
        <div className='result-list'>
         {results.map((el, i) => <p className='col-12 searchText' key={i}>{el.name}{el.title}</p>)}
        </div>
      </div>
    )
  }
}

export default SearchDisplay
