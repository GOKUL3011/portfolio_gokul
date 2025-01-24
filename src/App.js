import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Portfolio from './Portfolio';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="sidebar">
        <div className="profile">
          <h2>GOKUL's Portfolio</h2>
        </div>
        
        <nav className="nav-links">
          <Link to="/about" className="nav-link" activeClassName="active-link">About</Link>
          <Link to="/skills" className="nav-link" activeClassName="active-link">Skills</Link>
          <Link to="/projects" className="nav-link" activeClassName="active-link">Projects</Link>
          <Link to="/contact" className="nav-link" activeClassName="active-link">Contact</Link>
        </nav>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Portfolio/>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}
