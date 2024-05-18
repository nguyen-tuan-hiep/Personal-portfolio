import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-primary text-white p-4 shadow-md">
    <nav>
      <ul className="flex flex-wrap justify-center space-x-4">
        <li><Link to="/" className="hover:text-secondary">Home</Link></li>
        <li><Link to="/about" className="hover:text-secondary">About</Link></li>
        <li><Link to="/education" className="hover:text-secondary">Education</Link></li>
        <li><Link to="/publications" className="hover:text-secondary">Publications</Link></li>
        <li><Link to="/research" className="hover:text-secondary">Research</Link></li>
        <li><Link to="/certifications" className="hover:text-secondary">Certifications</Link></li>
        <li><Link to="/skills" className="hover:text-secondary">Skills</Link></li>
        <li><Link to="/languages" className="hover:text-secondary">Languages</Link></li>
        <li><Link to="/honors-awards" className="hover:text-secondary">Honors & Awards</Link></li>
        <li><Link to="/references" className="hover:text-secondary">References</Link></li>
        <li><Link to="/social-activities" className="hover:text-secondary">Social Activities</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
