
import React from 'react';
import addFriends from './addfriends.png';
import statsIcon from './stats.png';
import leaderboardIcon from './leaderboard.png';
import './NavBar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <div className='icon'><img src={addFriends} alt="Add Friends" /></div>
        <div className='icon'><img src={statsIcon} alt="Insights" /></div>
        <div className='icon'><img src={leaderboardIcon} alt="Leaderboard" /></div>
      </div>
    </nav>
  );
};

export default Navbar;