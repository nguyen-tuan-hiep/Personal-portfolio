import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NavButton from "./NavButton"; // Import the NavButton component

const Navbar = ({ toggleTheme, theme, setActiveComponent, activeComponent }) => {
  // Define styles based on the theme
  const grayDark = "rgb(212 212 212)";
  const grayLight = "rgb(64 64 64)";

  // Handlers for hover and leave effects
  const handleHover = (event, isActive) => {
    if (!isActive) {
      if (theme === "dark") {
        event.target.style.backgroundColor = grayDark;
        event.target.style.color = "black";
      } else {
        event.target.style.backgroundColor = grayLight;
        event.target.style.color = "white";
      }
    }
  };

  const handleMouseLeave = (event, isActive) => {
    if (!isActive) {
      event.target.style.backgroundColor = "transparent";
      event.target.style.color = theme === "dark" ? "white" : "black";
    }
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
      } shadow-md rounded-xl`}
    >
      <div className="container mx-auto p-4 flex justify-between">
        <div className="flex flex-row justify-start gap-4 font-bold">
          {["about", "resume", "contact"].map((component) => {
            const isActive = activeComponent === component;
            return (
              <NavButton
                key={component}
                component={component}
                isActive={isActive}
                theme={theme}
                onClick={() => setActiveComponent(component)}
                onMouseOver={(e) => handleHover(e, isActive)}
                onMouseLeave={(e) => handleMouseLeave(e, isActive)}
              />
            );
          })}
        </div>
        <div
          className={`mr-2 flex items-center cursor-pointer duration-300 font-bold hover:scale-150 transform duration-100 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
