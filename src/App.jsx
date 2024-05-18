// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/NavBar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './App.css';

const App = () => (
  <Router>
    <div className="flex justify-center h-full">
      <div className="sm:w-full lg:w-3/4">
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 md:ml-1/3 lg:ml-1/4 xl:ml-1/5 p-4 md:p-8">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
