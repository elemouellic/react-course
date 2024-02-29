import './Navbar.css';
import {Link} from 'react-router-dom';
import AnalogClock from './AnalogClock';

const Navbar = () => {
    const timeZone = "Europe/Paris";
    return (
        <nav>
            <a href="/"><AnalogClock timeZone={timeZone} /></a>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;