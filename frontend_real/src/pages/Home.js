import React, { useState, useEffect } from 'react';
import "./Home.css";
import {Link} from 'react-router-dom'
import streak from '../assets/streak.png'
import NavBar from '../assets/NavBar';

function Home() {
    const [streak, setStreak] = useState(-1)

    useEffect(() => {
        const fetchStreak = async () => {
            const response = await fetch('/api/main')
            const json = await response.json()
            console.log(json)

            if (response.ok) {
                setStreak(json.streak)
            }
        }

        fetchStreak()
    }, [])

    return (
        
        <div class="container">
            <div>
                <p class="greeting"> Hello, User!</p>
            </div>
        
            <div class="header">
                <Link to='/tasks' class="userText">View Daily Task</Link>
            </div>
            <div class="header">
                <Link to='/leaderboard' class="userText">Leaderboard</Link>
            </div>
            <div class="header">
                <Link to='/addfriends' class="userText">Add Friends</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={streak} alt='Streak' style={{ width: '4vw', height: 'auto' }}></img> <h4 class = 'streak' style={{marginRight: '20px', color: '#d2091c'}}>5d </h4><p class ='streak'>You're on fire!</p>
            </div>
            </div>
    

    )
};






export default Home