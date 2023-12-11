import React from 'react'
import '../styles/main.css'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div className='header'>
        <div className='logo'></div>
        <div className='name'>РОССИЯ23</div>
        <SearchBar></SearchBar>
    </div>
  )
}

export default Header