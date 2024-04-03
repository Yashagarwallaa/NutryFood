import React from 'react'
import './core_styles.css';
function Core() {
  return (
    <div>
        <div style={{display:'flex', alignItems:'center',justifyContent:'center'}} >
      <div className='core-title'>Core Values</div></div>
       <div className='core-1'>
        <div className='core-1-a' >
            <div className='image-1-a'>
                <img src='./Component 58.png'></img>
            </div>
            <div className='core-1-title'>Innovation</div>
        </div>
        <div className='core-1-a' >
            <div className='image-1-a'>
                <img src='./Component 59.png'></img>
            </div>
            <div className='core-1-title'>Integrity</div>
        </div>
        <div className='core-1-a' >
            <div className='image-1-a'>
                <img src='./Component 60.png'></img>
            </div>
            <div className='core-1-title'>Excellence</div>
        </div>
       </div>
       <div className='core-2'>
       <div className='core-2-a' >
            <div className='image-1-a'>
                <img src='./Component 62.png'></img>
            </div>
            <div className='core-1-title'>Inclusivity</div>
        </div>
        <div className='core-2-a' >
            <div className='image-1-a'>
                <img src='./Component 61.png'></img>
            </div>
            <div className='core-1-title'>Sustainability</div>
        </div>
       </div>
    </div>
  )
}

export default Core
