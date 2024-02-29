import Clock from "./Clock.jsx";
import AnalogClock from "./AnalogClock.jsx";
import {useState} from "react";
import UltimateBoard from "./UltimateBoard.jsx";

function About() {
    const projects = [
        {name: 'Clique moi', link: '#'}
        // Ajoutez plus de projets ici
    ];
    const [timeZone, setTimeZone] = useState("Europe/Paris");
    const [clickCounts, setClickCounts] = useState(new Array(projects.length).fill(0));
    const handleClick = (index) => {
        const newClickCounts = [...clickCounts];
        newClickCounts[index]++;
        setClickCounts(newClickCounts);
        console.log(clickCounts);
    };
    return (
        <div>
            <h1>Simon Cussonnet, Torel (Eure)</h1>
            <p>Je suis un développeur web spécialisé en React. J'aime créer des applications web modernes et réactives.</p>

            <h2>Mes projets</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <a href={project.link} onClick={() => handleClick(index)}>
                            {project.name} <span className="clickCount">{clickCounts[index]} fois</span>
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <Clock timeZone={timeZone} changeTimeZone={setTimeZone}/>
                <AnalogClock timeZone={timeZone}/>
                <UltimateBoard/>
            </div>
        </div>


    );
}

export default About;