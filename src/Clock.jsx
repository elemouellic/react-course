import {useEffect, useState} from "react";

function Clock() {
    const [date, setDate] = useState(new Date());

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
            <h2>Il est {date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;