import { useEffect, useState } from 'react';
import './AnalogClock.css';

function AnalogClock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    function tick() {
        setDate(new Date());
    }

    const secondsRatio = ((date.getSeconds() / 60) * 360) - 90;
    const minutesRatio = ((date.getMinutes() / 60) * 360) - 90;
    const hoursRatio = ((date.getHours() / 12) * 360) - 90;

    return (
        <svg className="clock" viewBox="0 0 100 100">
            <circle className="clock-face" cx="50" cy="50" r="48"/>
            <line className="hand hour-hand" x1="50" y1="50" x2="50" y2="24"
                style={{transform: `rotate(${hoursRatio}deg)`}}/>
            <line className="hand minute-hand" x1="50" y1="50" x2="50" y2="10"
                style={{transform: `rotate(${minutesRatio}deg)`}}/>
            <line className="hand second-hand" x1="50" y1="50" x2="50" y2="17"
                style={{transform: `rotate(${secondsRatio}deg)`}}/>
        </svg>
    );
}

export default AnalogClock;