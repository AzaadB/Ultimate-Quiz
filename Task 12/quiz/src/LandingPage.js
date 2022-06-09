import React from 'react';
import time from './time.png';

function LandingPage() {//This will render the HomePage//
    return (
        <div>
            <h1>Welcome to Quiz Time</h1>
            <h2>To start the quiz please click the quiz link on the navbar to start.</h2>
            <h2>If you need help </h2>

            <div className="time">
                <img src={time} alt="" />
            </div>

            <h1>GoodLuck!</h1>
        </div>
    )
}

export default LandingPage;
