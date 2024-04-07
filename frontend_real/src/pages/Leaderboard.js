import React from 'react'
import dummypfp from '../assets/dummypfp.jpeg'
import dummypfp2 from '../assets/dummypfp2.jpeg'
import './Leaderboard.css';

export default function Leaderboard() {
  return (
    <div class='container'>
      <div class="Label">
          <h1>Leaderboard</h1>
      </div>
      
      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={dummypfp} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Chloe</p>
      </div>

      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Zayan</p>
      </div>

      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Alex</p>
      </div>

      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Andrew</p>
      </div>

      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Elon</p>
      </div>
    </div>
  )
}
