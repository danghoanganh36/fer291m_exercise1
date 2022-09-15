import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
        <div className="container">
            <div className="column">
                <div className="card">
                    <img src='assets/images/cr.jpg' alt='CR7'/>
                    <h3>Cristano Ronaldo</h3>
                    <p className='title'>Manchester United</p>
                    <p><button class="glow-on-hover" type="button">Detail</button></p>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src='assets/images/kante.jpg' alt='Kante'/>
                    <h3>N'Golo Kante</h3>
                    <p className='title'>Chelsea</p>
                    <p><button class="glow-on-hover" type="button">Detail</button></p>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src='assets/images/messi.jpg' alt='M10'/>
                    <h3>Lionel Messi</h3>
                    <p className='title'>Paris saint-Germain</p>
                    <p><button class="glow-on-hover" type="button">Detail</button></p>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src='assets/images/neymar.jpg' alt='Neymar'/>
                    <h3>Neymar</h3>
                    <p className='title'>Paris saint-Germain</p>
                    <p><button class="glow-on-hover" type="button">Detail</button></p>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src='assets/images/kane.jpg' alt='Kane'/>
                    <h3>Harry Kane</h3>
                    <p className='title'>Tottenham Hotpurs</p>
                    <p><button class="glow-on-hover" type="button">Detail</button></p>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src='assets/images/haaland.jpg' alt='Haaland'/>
                    <h3>Erling Haaland</h3>
                    <p className='title'>Manchester City</p>
                    <p><button class="glow-on-hover" type="button">Detail</button></p>
                </div>
            </div>
        </div>
    )
  }
}

