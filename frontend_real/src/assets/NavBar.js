
import React from 'react';
import addFriends from './addfriends.png';
import statsIcon from './stats.png';
import leaderboardIcon from './leaderboard.png';
import './NavBar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <Link to='/addfriends' className='icon'><img src={addFriends} alt="Add Friends" /></Link>
        <Link to='/stats' className='icon'><img src={statsIcon} alt="Insights" /></Link>
        <Link to='/leaderboard' className='icon'><img src={leaderboardIcon} alt="Leaderboard" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;