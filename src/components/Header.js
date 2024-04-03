import React from 'react'
import './header_styles.css';
function Header() {
  return (
    <>
<div className='header' >
  <div className='header-title'>
  <div className='image-header'>
    <div className='imageheader-1'>
      <img src='./Vector (1).png'></img>
    </div>
    <div className='imageheader-1'>
      <img src='./header(2).png'></img>
    </div>
  </div>
 <div className='title'>
  <div className='main-title' >NUTRYFOOD </div>
  <div className='slogan'>CROWNED WITH INNOVATIONS</div>
  </div>
  </div>
  <div className='header-search'>
    <img className='search-image' src='./search (2) 1.png'></img>
  </div>
  <div className='header-last'>
    <div className='header-last-image'>
      <img src = './Component 58 (1).png'></img>
    </div>
    <div className='header-last-title'>
    Domestic & International Markets- Accessible worldwide and everywhere
    </div>
  </div>

  </div>
    </>
  )
}

export default Header;