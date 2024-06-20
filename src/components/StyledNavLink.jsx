import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavLink = ({ to, children, theme }) => {
	const grayDark = "rgb(212 212 212)";
	const grayLight = "rgb(64 64 64)";

	const navLinkStyle = {
		padding: "6px 12px",
		border: "2px solid transparent",
		borderRadius: "10px",
		transition: "background-color 0.3s ease",
		boxShadow: "0 2px 6px rgba(0, 0, 0, 0.7)",
		color: theme === "dark" ? "white" : "black",
	};

	const activeStyle = {
		backgroundColor: theme === "dark" ? grayDark : grayLight,
		color: theme === "dark" ? "black" : "white",
	};

	const handleHover = (event) => {
		if (theme === "dark") {
			event.target.style.backgroundColor = grayDark;
			event.target.style.color = "black";
		} else {
			event.target.style.backgroundColor = grayLight;
			event.target.style.color = "white";
		}
	};

	const handleMouseLeave = (event) => {
		if (!event.target.classList.contains("active")) {
			if (theme === "dark") {
				event.target.style.backgroundColor = "transparent";
				event.target.style.color = "#f3f4f6";
			} else {
				event.target.style.backgroundColor = "transparent";
				event.target.style.color = "black";
			}
		}
	};

	return (
		<NavLink
			to={to}
			className="nav-link"
			onMouseOver={handleHover}
			onMouseLeave={handleMouseLeave}
			style={({ isActive }) =>
				isActive ? { ...navLinkStyle, ...activeStyle } : navLinkStyle
			}
		>
			{children}
		</NavLink>
	);
};

export default StyledNavLink;
