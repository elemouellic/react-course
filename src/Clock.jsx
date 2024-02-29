import { useEffect, useState } from "react";
import "./Clock.css";
import moment from 'moment-timezone';

function Clock({ timeZone, changeTimeZone }) {
    const [date, setDate] = useState(new Date());
    const timeZones = moment.tz.names();
    console.log(timeZones);
    const timeZoneButtons = (
        <div className="containerButton">
            <button className="buttonHour" onClick={() => changeTimeZone("Europe/Paris")}>Paris</button>
            <button className="buttonHour" onClick={() => changeTimeZone("America/New_York")}>New York</button>
            <button className="buttonHour" onClick={() => changeTimeZone("Asia/Tokyo")}>Tokyo</button>
            <button className="buttonHour" onClick={() => changeTimeZone("Australia/Sydney")}>Sydney</button>
            <button className="buttonHour" onClick={() => changeTimeZone("America/Los_Angeles")}>Los Angeles</button>
            <button className="buttonHour" onClick={() => changeTimeZone("Asia/Dubai")}>Dubai</button>
            <button className="buttonHour" onClick={() => changeTimeZone("Europe/Belgrade")}>Београд</button>
            <button className="buttonHour" onClick={() => changeTimeZone("Europe/Moscow")}>Москва</button>
            <button className="buttonHour" onClick={() => changeTimeZone("America/Argentina/Buenos_Aires")}>Buenos Aires</button>
            <button className="buttonHour" onClick={() => changeTimeZone("Africa/Johannesburg")}>Johannesburg</button>
            <button className="buttonHour" onClick={() => changeTimeZone("Pacific/Auckland")}>Auckland</button>
            <button className="buttonHour" onClick={() => changeTimeZone("Asia/Shanghai")}>Shanghai</button>
        </div>

    );

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            <h2>Il est {date.toLocaleTimeString("fr-FR", { timeZone })}</h2>
            {timeZoneButtons}
        </div>
    );
}

import PropTypes from 'prop-types';

// Your Clock component code here...

Clock.propTypes = {
    changeTimeZone: PropTypes.func.isRequired,
    timeZone: PropTypes.string.isRequired,
};

export default Clock;