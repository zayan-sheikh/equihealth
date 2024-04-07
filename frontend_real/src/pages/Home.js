import React, { useState, useEffect } from 'react';
import "./Home.css";
import {Link} from 'react-router-dom'
import streakimg from '../assets/streakimg.png'
import NavBar from '../assets/NavBar';

function Home() {
    const [streak, setStreak] = useState(-1)

    useEffect(() => {
        const fetchStreak = async () => {
            // const response = await fetch('/api/main')
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            console.log("before");
            const response = await fetch("http://localhost:3001/api/main", requestOptions)
            console.log("after");
            console.log(response)
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={streakimg} alt='Streak' style={{ width: '8vw', height: 'auto' }}></img> <h4 class = 'streak' style={{marginRight: '20px', color: '#d2091c'}}>{streak}d </h4><p class ='streak'>You're on fire!</p>
            </div>
            <div>
                <NavBar />
                </div>
            </div>
    

    )
};






export default Home