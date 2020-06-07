import React from 'react';
import moment from 'moment';
import Countdown from 'react-countdown';
import './App.css';

function App() {
    const dateInFuture = moment('2020-09-15 20:30:00', 'YYYY-MM-DD HH:mm:ss');
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            return <p>Time to go!</p>;
        } else {
            return <span>{days} days {hours}h {minutes}min {seconds}s</span>;
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={"https://www.wildrovertravel.com/wp-content/uploads/2019/02/Madeira-North-Coast.jpg"}
                    alt="madeira"
                    width={'50%'}
                />
                <p>Get ready for takeoff in:</p>
                <Countdown date={dateInFuture} renderer={renderer}/>
            </header>
        </div>
    );
}

export default App;
