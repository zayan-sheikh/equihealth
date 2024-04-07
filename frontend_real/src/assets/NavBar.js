
import React from 'react';
import addFriends from './addfriends.png';
import statsIcon from './stats.png';
import leaderboardIcon from './leaderboard.png';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><img src={addFriends} alt="Add Friends" /><span>Home</span></li>
        <li><img src={statsIcon} alt="Insights" /><span>Profile</span></li>
        <li><img src={leaderboardIcon} alt="Leaderboard" /><span>Settings</span></li>
      </ul>
    </nav>
  );
};

export default Navbar;