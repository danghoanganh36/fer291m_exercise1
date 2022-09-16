import React from 'react'
import { Players } from '../Share/ListOfPlayers'
export default function PlayersWithMap() {
    return (
        <div className="container">
            {Players.map((player) =>(
                <div className="column">
                <div className="card">
                    <img src = {player.img} alt=""></img>
                    <h3>{player.name}</h3>
                    <p className='title'>{player.club}</p>
                    <p><button class="glow-on-hover" type="button">Detail</button></p>
                </div>
            </div>
            ))}  
        </div>
    )
}      