import React from 'react'
import dummypfp from '../assets/dummypfp.jpeg'
import dummypfp2 from '../assets/dummypfp2.jpeg'

export default function Leaderboard() {
  return (
    <div class='container'>
      <h1>Leaderboard</h1>
      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={dummypfp} alt="Chloe's Profile Picture" style={{ width: '12vw', height: 'auto' }}></img>
          <p>Chloe & 'Unicorn Name'</p>
      </div>
      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: 'auto' }}></img>
          <p>Zayan & 'Unicorn Name'</p>
      </div>
    </div>
  )
}
