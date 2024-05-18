import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navLinkStyle = {
		padding: "8px 12px",
		border: "1px solid transparent",
		borderRadius: "4px",
		transition: "background-color 0.3s ease",
		boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
	};

	const handleHover = (event) => {
		event.target.style.backgroundColor = "#F3f4f6";
		event.target.style.color = "#111827";
	};

	const handleMouseLeave = (event) => {
		event.target.style.backgroundColor = "transparent";
		event.target.style.color = "#f3f4f6";
	};

	return (
		<nav className="bg-neutral-600 shadow-md rounded-lg">
			<div className="container mx-auto px-4 py-3 flex justify-center">
				<ul className="flex items-center space-x-20">
					<li>
						<NavLink
							to="/about"
							className="nav-link"
							style={navLinkStyle}
							onMouseOver={handleHover}
							onMouseLeave={handleMouseLeave}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/resume"
							className="nav-link"
							style={navLinkStyle}
							onMouseOver={handleHover}
							onMouseLeave={handleMouseLeave}
						>
							Resume
						</NavLink>
					</li>
					{/* <li>
						<NavLink
							to="/portfolio"
							className="nav-link"
							style={navLinkStyle}
							onMouseOver={handleHover}
							onMouseLeave={handleMouseLeave}
						>
							Portfolio
						</NavLink>
					</li> */}
					<li>
						<NavLink
							to="/contact"
							className="nav-link"
							style={navLinkStyle}
							onMouseOver={handleHover}
							onMouseLeave={handleMouseLeave}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
