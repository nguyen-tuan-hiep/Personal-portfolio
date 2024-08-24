import React from "react";

// NavButton component for individual navigation buttons
const NavButton = ({ component, isActive, theme, onClick, onMouseOver, onMouseLeave }) => {
  // Define styles based on the theme
  const grayDark = "rgb(212 212 212)";
  const grayLight = "rgb(64 64 64)";

  // Define button styles
  const getButtonStyle = () => {
    return {
      padding: "6px 12px",
      border: "2px solid transparent",
      borderRadius: "10px",
      transition: "background-color 0.3s ease",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.7)",
      color: isActive
        ? theme === "dark"
          ? "black"
          : "white"
        : theme === "dark"
        ? "white"
        : "black",
      backgroundColor: isActive
        ? theme === "dark"
          ? grayDark
          : grayLight
        : "transparent",
    };
  };

  return (
    <button
      onClick={onClick}
      style={getButtonStyle()}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {component.charAt(0).toUpperCase() + component.slice(1)}
    </button>
  );
};

export default NavButton;
