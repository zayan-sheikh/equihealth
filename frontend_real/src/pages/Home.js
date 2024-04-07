import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div class="test">
        
        <div class="container">
            <div class="header">
                <p class="userText"> Hello, User!</p>
            </div>

            <div class="header">
                <Link to='/tasks' class="userText">View Daily Task</Link>
            </div>
        </div>


        </div>
    )
};






export default Home