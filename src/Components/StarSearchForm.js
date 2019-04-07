import React, { Component } from 'react';
import StarSearchApiService from '../Services/StarSearchApiServices'

export class StarSearchForm extends Component {
  constructor(props){
    super(props)
        this.searchInput = React.createRef();
  }
  handleSubmit = event => {
      event.preventDefault();
      const searchParams = event.target.starFilter.value;
      const searchValue = this.searchInput.current.value;
      StarSearchApiService.get(searchParams, searchValue)
        .then(res => console.log(res))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='starFilter'>Choose your base search: </label>
        <select name='starFilter' required>
            <option value=''></option>
            <option value='people'>Character</option>
            <option value='films'>Film</option>
            <option value='planets'>Planets</option>
            <option value='starships'>Spaceship</option>
            <option value='species'>Species</option>
            <option value='vehicles'>Vehicle</option>
        </select><br/>
        <label htmlFor='searchTextBox'>Search: </label>
        <input type='text' name='searchTextbox' id='searchTextbox' ref={this.searchInput} placeholder='chewbacca' required></input>
        <input type='submit' name='submit' value='Search The Stars'/>
      </form>
    )
  }
}

export default StarSearchForm
