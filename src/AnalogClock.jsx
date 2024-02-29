// AnalogClock.jsx
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './AnalogClock.css';

function AnalogClock({ timeZone }) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        function tick() {
            const dateInTimeZone = new Date(new Date().toLocaleString("en-US", { timeZone }));
            setDate(dateInTimeZone);
        }

        const timerID = setInterval(tick, 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    }, [timeZone]);

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

AnalogClock.propTypes = {
    timeZone: PropTypes.string.isRequired,
};

export default AnalogClock;