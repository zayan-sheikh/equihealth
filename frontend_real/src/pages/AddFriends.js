import React from 'react'
import FakeSearchBar from '../components/FakeSearchBar'
import dummypfp from '../images/dummypfp.jpeg'
import dummypfp2 from '../images/dummypfp2.jpeg'
import './Leaderboard.css';

export default function AddFriends() {
  return (
    <div class='container'>
      <div class="Label">
          <h1>Add Friends</h1>
      </div>
      <div class ='friendbox'>
        <p>Search for Friends</p>
        <FakeSearchBar />
      </div>

      <div>
      <p>Some people you may know...</p>
      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Sandra </p>

      </div>
      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Tara </p>

      </div>
      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Karan</p>

      </div>
      <div class ='leaderboard-item' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={dummypfp2} alt="Chloe's Profile Picture" style={{ width: '12vw', height: '12vw',  borderRadius: '100px'}}></img>
          <p>Tanya</p>

      </div>
      </div>
    </div>
  )
}