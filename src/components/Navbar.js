import React from 'react'
import './navbar_styles.css'
function Navbar() {
  return (
    <>
     {/* <div className='navbar' style={{
    display: 'flex',
    width: '1280px',
    height: '60px',
    padding: '16px 64px 16px 421px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '236px',
    background:'#004AAD',
  }}>
     <div className='navbar-att' style={
      {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '24px',
      }
     }>
      <li style={{color: '#FFF', }}>Home</li>
      <li>About Us</li>
      <li>Products</li>
      <li>Contact Us</li>
     </div>
     </div> */}
     <div className='navbar'>
       <div className='nav-att'>
         <div className='nav-a'>
          <a href=''>Home</a>
         </div>
         <div className='nav-a'>
          <a href=''>About Us</a>
         </div>
         <div className='nav-a'>
          <a href=''>Products</a>
         </div>
         <div className='nav-a'>
          <a href=''>Contact Us</a>
         </div>
       </div>
     </div>
    </>
  )
}

export default Navbar