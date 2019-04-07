import React, { Component } from 'react';
import StarSearchApiService from '../Services/StarSearchApiServices'

export class StarSearchForm extends Component {
  constructor(props){
    super(props)
        this.searchInput = React.createRef();
  }
  handleSubmit = event => {
      event.preventDefault();
      const {starFilter, wookieLang } = event.target;
      const isWookie= wookieLang.checked ? '&format=wookiee' : '';
      const searchFilter = starFilter.value;
      const searchValue = this.searchInput.current.value;
      StarSearchApiService.get(searchFilter, isWookie, searchValue)
  }
  //planets, spaceships, vehicles, characters, films or species
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='starFilter'>Choose your base search: </label>
        <select name='starFilter' required>
            <option value=''></option>
            <option value='planets'>Planets</option>
            <option value='starships'>Spaceship</option>
            <option value='vehicles'>Vehicle</option>
            <option value='people'>Character</option>
            <option value='films'>Film</option>
            <option value='species'>Species</option>
        </select>
        <input type='checkbox' name='wookieLang' id='isWookie' value='iswookie'/>
        <label htmlFor='wookieLang'>Chewbacca is my family</label> <br/>
        <label htmlFor='searchTextBox'>Search: </label>
        <input type='text' name='searchTextbox' id='searchTextbox' ref={this.searchInput} placeholder='chewbacca' required></input>
        <input type='submit' name='submit' value='Search The Stars'/>
      </form>
    )
  }
}

export default StarSearchForm
