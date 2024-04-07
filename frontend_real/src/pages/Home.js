import React, { useState, useEffect } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

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
        <div className="test">
        
        <div className="container">
            <h1>{streak}</h1>

            <div className="header">
                <p className="userText"> Hello, User!</p>
            </div>

            <div className="header">
                <Link to='/tasks' className="userText">View Daily Task</Link>
            </div>
        </div>


        </div>
    )
};






export default Home