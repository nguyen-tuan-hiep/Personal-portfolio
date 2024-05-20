import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import StyledNavLink from "./StyledNavLink";

const Navbar = ({ toggleTheme, theme }) => {
	return (
		<nav
			className={`${
				theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
			} shadow-md rounded-xl`}
		>
			<div className="container mx-auto p-4 flex justify-between">
				<div className="flex flex-row justify-start gap-4 font-bold">
					<StyledNavLink
						to="/about"
						theme={theme}
					>
						About
					</StyledNavLink>

					<StyledNavLink
						to="/resume"
						theme={theme}
					>
						Resume
					</StyledNavLink>

					<StyledNavLink
						to="/contact"
						theme={theme}
					>
						Contact
					</StyledNavLink>
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
