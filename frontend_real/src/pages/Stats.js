import React from 'react';
import "./Stats.css";
import {Link} from 'react-router-dom';

function Stats() {
    return (
        <div class="container">

        {/* <div class="Back">
            <p>ARROW PLACEHOLDER</p>
        </div>
         */}

         
        <div class="Label">
            <h1>YOUR STATS</h1>
        </div>

        <div class="Graph">
            Just testing
        </div>

        <div class="Priority">
            <div class="prContain">
                <p>Lately, your priority has been&nbsp; </p>
                <p class="prText">fitness</p>
                <p class="prText">.</p>
            </div>            
        </div>

        <div class="Balance">
        <div class="prContain">
                <p>Create balance with&nbsp; </p>
                <p class="prText">nutrition</p>
                <p class="prText">.</p>
            </div>   
        </div>

        <div class="Plug">
            Arc'teryx has the perfect product for your current lifestyle:
        </div>

        <div class="Leaderboard"></div>
            See how your friends are doing...
        </div>
    )
};






export default Stats