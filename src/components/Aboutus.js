import React from 'react'
import './aboutus_styles.css';
function Aboutus() {
  return (
    <>
    <div className='aboutus-section'>
    <div className='about-us'>About Us</div>
    </div> <div className='aboutus-des'>
     <div className='foundation'>
        <div className='imagea-1'>
            <img src='./imageaboutus1.png'></img>
        </div>
        <div className='foundation-1'>
            <div className='foundation-title'>Standing Foundation</div>
            <div className='foundation-des' >
            Our goal is global expansion, ensuring all Indians worldwide enjoy the taste and health benefits of Indian cuisine. We achieve this through partnerships with Indian restaurants worldwide, maximizing NutryFood Industries' reach.
            </div>
        </div>
     </div>
     <div className='foundation'>
        <div className='imagea-2'>
            <img src='./imageaboutus2.png'></img>
        </div>
        <div className='foundation-1'>
            <div className='foundation-title'>Branching Principles</div>
            <div className='foundation-des'>
            We uphold unwavering commitment to quality, standards, traditional cooking methods, preserving nutrients, health benefits, and the personal touch that our customers cherish.
            </div>
        </div>
        
     </div>
     <div className='foundation' style={{marginRight:'4rem'}} >
        <div className='imagea-3'>
            <img src='./imageaboutus3.png'></img>
        </div>
        <div className='foundation-1'>
            <div className='foundation-title'>Fruitful Results</div>
            <div className='foundation-des' >
            We continue our mothers' legacy by offering NutryFood to present and future generations, ensuring the tradition lives on.
            </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default Aboutus