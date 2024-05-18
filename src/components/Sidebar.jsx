import React, { useEffect, useRef, useState } from "react";

const Sidebar = () => {
	const sidebarRef = useRef(null);
	const contentRef = useRef(null);
	const [showDetails, setShowDetails] = useState(true);

	useEffect(() => {
		const setSidebarHeight = () => {
			if (window.innerWidth <= 768) {
				sidebarRef.current.style.height = "auto";
				sidebarRef.current.style.position = "static";
				contentRef.current.style.paddingLeft = "0";
				showDetails && setShowDetails(false);
			} else {
				sidebarRef.current.style.height = window.innerHeight + "px";
				sidebarRef.current.style.position = "fixed";
				contentRef.current.style.paddingLeft =
					sidebarRef.current.offsetWidth + "px";
				showDetails && setShowDetails(true);
			}
		};

		setSidebarHeight();

		window.addEventListener("resize", setSidebarHeight);

		return () => {
			window.removeEventListener("resize", setSidebarHeight);
		};
	}, []);

	const toggleDetails = () => {
		setShowDetails(!showDetails);
	};

	return (
		<>
			<aside
				ref={sidebarRef}
				className="bg-neutral-500 text-white p-8 w-full md:w-1/3 lg:w-1/5"
			>
				<div className="sidebar-container">
					<div className="sidebar-content">
						<div className="text-center mb-8">
							<img
								src="./me.jpg"
								alt="Profile"
								className="rounded-3xl mx-auto mb-4"
							/>
							<h2 className="text-2xl font-bold mb-4">Nguyen Tuan Hiep</h2>
							<p className="text-gray-700 text-xl font-bold">Research Assistance</p>
						</div>
						<div className="">
							{showDetails && (
								<>
									<div className="flex items-center mb-4">
										<i className="fas fa-envelope text-primary mr-2"></i>
										<span className="email-address truncate">
											hiep.n120515@sis.hust.edu.vn
										</span>
									</div>

									<div className="flex items-center mb-4">
										<i className="fas fa-phone text-primary mr-2"></i>
										<span>(+84) 35 587 1065</span>
									</div>
									<div className="flex items-center mb-4">
										<i className="fas fa-calendar text-primary mr-2"></i>
										<span>September 1st, 2002</span>
									</div>
									<div className="flex items-center mb-4">
										<i className="fas fa-map-marker-alt text-primary mr-2"></i>
										<span>Hoan Kiem, Hanoi, Vietnam</span>
									</div>
								</>
							)}
						</div>
						<div className="flex justify-center space-x-4">
							{window.innerWidth <= 768 && (
								<button
									onClick={toggleDetails}
									className="text-gray-400 hover:text-primary focus:outline-none"
								>
									{showDetails ? "Show less" : "Show more"}
								</button>
							)}
						</div>
					</div>
				</div>
			</aside>
			<div
				ref={contentRef}
				className="pl-0 md:pl-1/4"
			></div>
		</>
	);
};

export default Sidebar;
