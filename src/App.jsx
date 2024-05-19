import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Sidebar from './components/Sidebar';
import Navbar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';
import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation(); // This hook returns the current location object

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key} // Unique key for each location
        timeout={300} // Transition duration in milliseconds
        classNames="fade" // Class name applied during the transition
      >
        <Routes location={location}> // Pass location to the Routes component to manage transitions
          <Route exact path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => (
  <Router>
    <div className="flex justify-center h-full">
      <div className="sm:w-full lg:w-3/4">
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 md:ml-1/3 lg:ml-1/4 xl:ml-1/5 p-4 md:p-8">
            <Navbar />
            <AnimatedRoutes /> {/* Use AnimatedRoutes instead of direct Routes */}
          </main>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
