import React, { useEffect, useState } from 'react';
import "./Stats.css";
import {Link} from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';


function Stats() {
    const [user, setUser] = useState({streak: 0, water: 0, exercise: 0, food: 0, brain: 0, connect: 0})

    useEffect(() => {
        const fetchStreak = async () => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            const response = await fetch("http://localhost:3001/api/main", requestOptions)
            const json = await response.json()

            if (response.ok) {
                setUser(json)
            }
        }

        fetchStreak()
    }, [])

    
    const dummybars = [
    {name: 'Page A', Score: user.food},
    {name: 'Page A', Score: user.brain},
    {name: 'Page A', Score: user.water},
    {name: 'Page A', Score: user.exercise},
    {name: 'Page A', Score: user.connect}            
    ];


    return (
        <div class="container">

        {/* <div class="Back">
            <p>ARROW PLACEHOLDER</p>
        </div>
         */}


        <div class="Label">
            <h1>YOUR STATS</h1>
        </div>
        {/* <div class="Label">
            <p>{user.water}</p>
            <p>{user.exercise}</p>
            <p>{user.food}</p>
            <p>{user.brain}</p>
            <p>{user.connect}</p>
        </div> */}

        

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
            
            <div class="plugHeader">
                Arc'teryx has great products to enhance your fitness!
            </div>

            <div class="plugBody">
                <a href="https://arcteryx.com/ca/en/shop/della-flask-holder-pack-accessory">
                <img src={require("./boawaa.png") } alt="product_preview" width="30%" height="10%" className="merchPic"/> 
                </a>

                <a href="https://arcteryx.com/ca/en/shop/mens/sylan-shoe">
                <img src={require("./shoe.png") } alt="product_preview" width="30%" height="10%" className="merchPic"/> 
                </a>

                <a href="https://arcteryx.com/ca/en/shop/mens/norvan-shell-jacket">
                <img src={require("./runner.png") } alt="product_preview" width="30%" height="10%" className="merchPic"/> 
                </a>
            </div>
        </div>

        
        </div>
        
    )
};






export default Stats