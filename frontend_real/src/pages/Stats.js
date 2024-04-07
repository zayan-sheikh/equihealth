import React from 'react';
import "./Stats.css";
import {Link} from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const dummybars = [
                {name: 'Page A', Score: 3, pv: 2400, amt: 2400},
                {name: 'Page A', Score: 8, pv: 2400, amt: 2400},
                {name: 'Page A', Score: 7, pv: 2400, amt: 2400},
                {name: 'Page A', Score: 9, pv: 2400, amt: 2400},
                {name: 'Page A', Score: 3, pv: 2400, amt: 2400}            
            ];


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
            <ResponsiveContainer width="95%" height={300}>
            <BarChart width={400} height={300} data={dummybars}>
           
           {/* <Legend align='center'></Legend> */}
           <Tooltip/>
            <Bar 
                dataKey="Score" barSize={40} fill="#0a4752"
                label={""} radius={[100,100,0,0]}/>
                
            
            
            </BarChart>
            
            </ResponsiveContainer>

            <div className="icon-container">
                <img src={require("./food.png")} alt="icon"/>
                <img src={require("./brain.png")} alt="icon"/>
                <img src={require("./water.png")} alt="icon"/>
                <img src={require("./heart.png")} alt="icon"/>
                <img src={require("./ppl.png")} alt="icon"/>
            </div>

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
            Arc'teryx has the perfect product for your current priority:
        </div>

        <div class="Leaderboard"></div>
            See how your friends are doing...
        </div>
        
    )
};






export default Stats