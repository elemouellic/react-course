import Clock from "./Clock.jsx";
import AnalogClock from "./AnalogClock.jsx";

function About() {
    const projects = [
        {name: 'Projet 1', link: '#'},
        {name: 'Projet 2', link: '#'},
        // Ajoutez plus de projets ici
    ];

    return (
        <div>
            <h1>À propos de moi</h1>
            <p>Je suis un développeur web spécialisé en React. J'aime créer des applications web modernes et réactives.</p>

            <h2>Mes projets</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <a href={project.link}>{project.name}</a>
                    </li>
                ))}
            </ul>
            <AnalogClock />
            <Clock />
        </div>


    );
}

export default About;