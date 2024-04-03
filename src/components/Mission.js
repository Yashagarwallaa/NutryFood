import React from 'react'
import './mission_styles.css'
export default function Mission() {
  return (
    <div className='mission-vision'>
      <div className='mission'>
        <div className='mission-title'>
            <div className='mission-image'>
            <img src='./image_mission.png' alt='missin-icon'></img>
            </div>
            <div className='mission-header'>MISSION</div>
        </div>
        <div className='mission-des'>“To help people live healthier lives and make the world a better place with new ideas”
      </div>
      </div>
      <div className='vision'>
        <div className='mission-title'>
            <div className='mission-image'>
            <img src='./image_mission.png' alt='missin-icon'></img>
            </div>
            <div className='mission-header'>VISION</div>
        </div>
        <div className='mission-des'>“To help people live healthier lives and make the world a better place with new ideas”
      </div>
      </div>
    </div>
  )
}
