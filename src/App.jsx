import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [activeComponent, setActiveComponent] = useState("about");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const renderContent = () => {
    switch (activeComponent) {
      case "about":
        return <About theme={theme} />;
      case "resume":
        return <Resume theme={theme} />;
      case "contact":
        return <Contact theme={theme} />;
      default:
        return <About theme={theme} />;
    }
  };

  return (
    <div
      className={`flex justify-center h-full ${theme === "dark" ? "dark" : "light"}`}
    >
      <div className="sm:w-full lg:w-3/4">
        <div className="flex flex-col md:flex-row">
          <Sidebar theme={theme} />
          <main className="flex-1 md:ml-1/3 lg:ml-1/4 xl:ml-1/5 p-4 md:p-8">
            <Navbar
              toggleTheme={toggleTheme}
              theme={theme}
              setActiveComponent={setActiveComponent}
              activeComponent={activeComponent} // Pass activeComponent state
            />
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
