import React, { Component } from 'react'

export class StarSearchForm extends Component {
  handleSubmit = event => {
      event.preventDefault();
      console.log('howdy')
  }
  //planets, spaceships, vehicles, characters, films or species
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for='starFilter'>Search By: </label>
        <select name='starFilter'>
            <option value='null'></option>
            <option value='planets'>Planets</option>
            <option value='starships'>Spaceship</option>
            <option value='vehicles'>Vehicle</option>
            <option value='people'>Character</option>
            <option value='films'>Film</option>
            <option value='species'>Species</option>
        </select>
        <input type='checkbox' name='wookieLang' value='isWookie'/>
        <label for='wookieLang'>Chewbacca is my family</label> <br/>
        <label for='searchTextBox'>Search: </label>
        <input type='text' name='searchTextbox' placeholder='chewbacca'></input>
        <input type='submit' name='submit' value='Search The Stars'/>
      </form>
    )
  }
}

export default StarSearchForm
