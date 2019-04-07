import React, { Component } from 'react'

export class StarSearchForm extends Component {
  handleSubmit = event => {
      event.preventDefault();
      console.log('howdy')
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='submit' name='submit' value='Search The Stars'/>
      </form>
    )
  }
}

export default StarSearchForm
