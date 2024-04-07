import React, { useState, useEffect } from 'react';
import "./Home.css";
import {Link} from 'react-router-dom'
import streakimg from '../assets/streakimg.png'
import differenceInHours from 'date-fns/differenceInHours'

function Home() {
    const [streak, setStreak] = useState()
    var user = {};

    useEffect(() => {
        const fetchStreak = async () => {
            // const response = await fetch('/api/main')
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            const response = await fetch("http://localhost:3001/api/main", requestOptions)
            const json = await response.json()

            if (response.ok) {
                user = json;
                setStreak(json.streak)
            }
        }

        fetchStreak()

        var time = differenceInHours(new Date(), new Date(user.updatedAt));

        if (time > 48) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
            "streak": 0
            });

            const requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            var path = "http://localhost:3001/api/main/";
            var result = path.concat(user._id);

            fetch(result, requestOptions);
        }
    }, [])

    return (
        
        <div class="container">
            <div>
                <p class="greeting"> Hello, User!</p>
            </div>
        
            <Link to='/tasks' class="userText">
                <div class="header">
                    <p>View Daily Tasks</p>
                </div>
            </Link>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={streakimg} alt='Streak' style={{ width: '30vw', height: 'auto' }}></img> 
                    <h4 class = 'streak' style={{fontSize: '20vw', marginRight: '20px', color: '#d2091c'}}>{streak} d </h4>
                </div>
                <h2 class ='streak'>You're on fire!</h2>
            </div>
        </div>
    

    )
};






export default Home