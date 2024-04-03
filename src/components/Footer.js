import React from 'react'
import './footer_styles.css'
function Footer() {
  return (
    <div>
      < div className='footer'>
           <div className='footer-main'>
           <div className='footer-title'>NUTRYFOOD</div>
           <div className='footer-slogan'>CROWNED WITH INNOVATIONS</div>
           </div>
           <div className='footer-nav'>
            <div className='footer-nav-a'>
                <a href='#'>Home</a>
            </div>
            <div className='footer-nav-a'>
                <a href='#'>About Us</a>
            </div>
            <div className='footer-nav-a'>
                <a href='#'>Products</a>
            </div>
            <div className='footer-nav-a'>
                <a href='#'>Contact Us</a>
            </div>
           </div> <div style={{display:''}}>
           <div className='footer-icon'>
            <div className='icon-footer'>
            <img src='./Component 38.png'></img>
            </div>
            <div className='icon-footer'>
            <img src='./Component 39.png'></img>
            </div>
            <div className='icon-footer'>
            <img src='./Component 40.png'></img>
            </div>
            <div className='icon-footer'>
            <img src='./Component 41.png'></img>
            </div>
            <div className='icon-footer'>
            <img src='./Component 42.png'></img>
            </div>
           </div>
           <div  style={{color:'#FFF',fontFamily:'Montserrat',fontSize:'1rem',fontStyle:'normal',
        fontWeight:'600',marginTop:'3.5rem' , marginLeft:'80%'}}>
           © 2024, NutryFood. All rights reserved.
           </div> </div>
           </div>
      </div>
  )
}

export default Footer
