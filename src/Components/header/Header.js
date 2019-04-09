import React, { Component } from 'react'
import StarSearchForm from '../SearchForm/StarSearchForm';
import starWarLogo from '../../Images/starwarlogo.png';
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <header className='starwar-header'>
        <div className='logo-container row'>
          <img alt='star war banner'className='col-4' src={starWarLogo}></img>
        </div>
          <h1 className="title-text col-4">Galactic Search</h1>
        <StarSearchForm />
      </header>
    )
  }
}

export default Header
