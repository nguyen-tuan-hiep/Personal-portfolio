import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
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
							<Navbar
								toggleTheme={toggleTheme}
								theme={theme}
							/>
							<Routes>
								<Route
									path="/"
									element={<Navigate to="/about" />}
								/>
								<Route
									path="/about"
									element={<About theme={theme} />}
								/>
								<Route
									path="/resume"
									element={<Resume theme={theme} />}
								/>
								<Route
									path="/contact"
									element={<Contact theme={theme} />}
								/>
							</Routes>
						</main>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;
