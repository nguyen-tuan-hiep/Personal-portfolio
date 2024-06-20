import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	const MainContent = () => {
		const location = useLocation();
		let Component;
		switch (location.pathname) {
			case "/about":
				Component = About;
				break;
			case "/resume":
				Component = Resume;
				break;
			case "/contact":
				Component = Contact;
				break;
			default:
				Component = About; // default to About if path is not recognized
		}

		return <Component theme={theme} />;
	};

	return (
		<Router>
			<div
				className={`flex justify-center h-full ${
					theme === "dark" ? "dark" : "light"
				}`}
			>
				<div className="sm:w-full lg:w-3/4">
					<div className="flex flex-col md:flex-row">
						<Sidebar theme={theme} />
						<main className="flex-1 md:ml-1/3 lg:ml-1/4 xl:ml-1/5 p-4 md:p-8">
							<Navbar toggleTheme={toggleTheme} theme={theme} />
							<Routes>
								<Route path="/*" element={<MainContent />} />
							</Routes>
						</main>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;
