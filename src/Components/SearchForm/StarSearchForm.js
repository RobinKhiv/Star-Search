import React, { Component } from 'react';
import StarSearchApiService from '../../Services/StarSearchApiServices'
import StarContext from '../../Context/StarSearchContext';
import './StarSearchForm.css'

export class StarSearchForm extends Component {
  constructor(props){
    super(props)
        this.searchInput = React.createRef();
  }
  static contextType = StarContext;
  handleSubmit = event => {
      event.preventDefault();
      this.context.isLoading = true;
      const searchParams = event.target.starFilter.value;
      const searchValue = this.searchInput.current.value;
      StarSearchApiService.get(searchParams, searchValue)
        .then(res => {this.context.setResults(res.results);
          this.context.isLoading = false;
        })
        .catch(err => this.context.setError(err))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='row'>
        <div className='searchForm col-6'>
        {/* <h3>Is this the <span className='strike-through'>driod</span> data you are looking for</h3> */}
          <label htmlFor='starFilter'>Choose your base search: </label>
          <select name='starFilter' required>
              <option value=''></option>
              <option value='people'>Characters</option>
              <option value='films'>Films</option>
              <option value='planets'>Planets</option>
              <option value='starships'>Spaceships</option>
              <option value='species'>Species</option>
              <option value='vehicles'>Vehicle</option>
          </select><br/>
          <label htmlFor='searchTextBox'>Search: </label>
          <input type='text' name='searchTextbox' id='searchTextbox' ref={this.searchInput} placeholder='chewbacca' required></input>
          <input type='submit' name='submit' value='Search The Stars'/>
        </div>
      </form>
    )
  }
}

export default StarSearchForm
