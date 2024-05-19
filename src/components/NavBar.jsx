import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = ({ toggleTheme, theme }) => {
	const navLinkStyle = {
		padding: "6px 12px",
		border: "2px solid transparent",
		borderRadius: "10px",
		transition: "background-color 0.3s ease",
		boxShadow: "0 2px 6px rgba(0, 0, 0, 0.7)",
		color: theme === "dark" ? "white" : "black",
	};

	const handleHover = (event) => {
		if (theme === "dark") {
			event.target.style.backgroundColor = "rgb(212 212 212)";
			event.target.style.color = "black";
		} else {
			event.target.style.backgroundColor = "rgb(64 64 64)";
			event.target.style.color = "white";
		}
	};

	const handleMouseLeave = (event) => {
		if (theme === "dark") {
			event.target.style.backgroundColor = "transparent";
			event.target.style.color = "#f3f4f6";
		} else {
			event.target.style.backgroundColor = "transparent";
			event.target.style.color = "black";
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
					<NavLink
						to="/about"
						className="nav-link"
						style={navLinkStyle}
						onMouseOver={handleHover}
						onMouseLeave={handleMouseLeave}
					>
						About
					</NavLink>

					<NavLink
						to="/resume"
						className="nav-link"
						style={navLinkStyle}
						onMouseOver={handleHover}
						onMouseLeave={handleMouseLeave}
					>
						Resume
					</NavLink>

					<NavLink
						to="/contact"
						className="nav-link"
						style={navLinkStyle}
						onMouseOver={handleHover}
						onMouseLeave={handleMouseLeave}
					>
						Contact
					</NavLink>
				</div>
				<div
					className={`mr-2 flex items-center cursor-pointer duration-300 font-bold hover:scale-150 transform duration-100 ${
						theme === "dark" ? "text-gray-100" : "text-gray-900"
					}`}
					onClick={toggleTheme}
				>
					{theme === "dark" ? (
						<LightModeIcon className="mr-2" />
					) : (
						<DarkModeIcon className="mr-2" />
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
