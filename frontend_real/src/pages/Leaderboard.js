import React from 'react'
import dummypfp from '../images/dummypfp.jpeg'
import dummypfp2 from '../images/dummypfp2.jpeg'
import './Leaderboard.css';

export default function Leaderboard() {
  return (
    <div class='container'>
      <div class="Label">
          <h1>Leaderboard</h1>
      </div>
      <div class="board">
       
      <div class="subboard">
      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={dummypfp} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Chloe</p>

        <div class="streakelem">
          <img src={require('../images/streakimg.png')} alt='Streak' style={{ width: 'auto', height:'50px', padding: '0'}}></img> 
          <h4 class = 'streak' style={{fontSize: '10vw', marginRight: '-20vw', color: '#d2091c'}}> 11 </h4>
       </div>

       
                    
      </div>

      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Zayan</p>

          <div class="streakelem">
          <img src={require('../images/streakimg.png')} alt='Streak' style={{ width: 'auto', height:'50px', padding: '0'}}></img> 
          <h4 class = 'streak' style={{fontSize: '10vw', marginRight: '-20vw', color: '#d2091c'}}> 10 </h4>
       </div>
      </div>

      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Alex</p>

          <div class="streakelem">
          <img src={require('../images/streakimg.png')} alt='Streak' style={{ width: 'auto', height:'50px', padding: '0'}}></img> 
          <h4 class = 'streak' style={{fontSize: '10vw', marginRight: '-20vw', color: '#d2091c'}}> 6 </h4>
       </div>
      </div>

      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Drew</p>

          <div class="streakelem">
          <img src={require('../images/streakimg.png')} alt='Streak' style={{ width: 'auto', height:'50px', padding: '0'}}></img> 
          <h4 class = 'streak' style={{fontSize: '10vw', marginRight: '-20vw', color: '#d2091c'}}> 3 </h4>
       </div>
      </div>

      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Elon</p>

          <div class="streakelem">
          <img src={require('../images/streakimg.png')} alt='Streak' style={{ width: 'auto', height:'50px', padding: '0'}}></img> 
          <h4 class = 'streak' style={{fontSize: '10vw', marginRight: '-20vw', color: '#d2091c'}}> 2 </h4>
       </div>
      </div>

      

      </div>


    </div>
    </div>
  )
}
