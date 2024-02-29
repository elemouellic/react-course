import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Contacts from './Contacts.jsx';
import Navbar from './Navbar.jsx';
import About from './About.jsx';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Welcome Home</div>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />

        </Routes>
    </Router>
  );
}

export default App;