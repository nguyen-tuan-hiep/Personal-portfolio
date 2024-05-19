import React, { useEffect, useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";

const Sidebar = ({ theme }) => {
	const sidebarRef = useRef(null);
	const contentRef = useRef(null);
	const [showDetails, setShowDetails] = useState(false);

	useEffect(() => {
		const setSidebarHeight = () => {
			if (window.innerWidth <= 768) {
				sidebarRef.current.style.height = "auto";
				sidebarRef.current.style.position = "static";
				contentRef.current.style.paddingLeft = "0";
			} else {
				sidebarRef.current.style.height = window.innerHeight + "px";
				sidebarRef.current.style.position = "fixed";
				contentRef.current.style.paddingLeft =
					sidebarRef.current.offsetWidth + "px";
				setShowDetails(true);
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
				className={`${
					theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
				} px-8 pt-8 w-full md:w-1/3 lg:w-1/5`}
			>
				<div className="sidebar-container">
					<div className="sidebar-content">
						{/* khi màn hình mở rộng thì div con sẽ nằm trên nhau */}
						<div className="text-center flex items-center space-x-10 md:space-x-0 justify-center md:block md:mb-8">
							<div>
								<img
									src="./me.jpg"
									alt="Profile"
									className="rounded-3xl mx-auto mb-4 sm:w-40 sm:h-40 w-32 h-32"
								/>
							</div>
							<div>
								<h2 className="text-2xl font-bold mb-4">Nguyen Tuan Hiep</h2>
								<p
									className={`text-xl font-bold ${
										theme === "dark" ? "text-gray-400" : "text-gray-200"
									}`}
								>
									Research Assistance
								</p>
							</div>
						</div>
						<div>
							{showDetails && (
								<>
									<div className="flex items-center mb-4">
										<PlaceIcon className="mr-2" />
										<span>Hoan Kiem, Hanoi, Vietnam</span>
									</div>

									<div className="flex flex-row items-center justify-between">
										<div className="flex items-center mb-4">
											<a
												href="mailto:hiep.n120515@sis.hust.edu.vn"
												className="hover:scale-150 transform duration-300"
											>
												<EmailIcon />
											</a>
										</div>

										<div className="flex items-center mb-4  w-8">
											<a
												href="https://github.com/nguyen-tuan-hiep"
												target="_blank"
												rel="noreferrer"
												className="hover:scale-150 transform duration-300"
											>
												<GitHubIcon />
											</a>
										</div>

										<div className="flex items-center mb-4">
											<a
												href="https://www.facebook.com/hiep.nt2002/"
												target="_blank"
												rel="noreferrer"
												className="hover:scale-150 transform duration-300"
											>
												<FacebookIcon />
											</a>
										</div>

										<div className="flex items-center mb-4">
											<a
												href="https://www.instagram.com/nguyen.tuan.hiep"
												target="_blank"
												rel="noreferrer"
												className="hover:scale-150 transform duration-300"
											>
												<InstagramIcon />
											</a>
										</div>

										<div className="flex items-center mb-4">
											<a
												href="linkedin.com/in/tuan-hiep-nguyen-61595529a/"
												target="_blank"
												rel="noreferrer"
												className="hover:scale-150 transform duration-300"
											>
												<LinkedInIcon />
											</a>
										</div>
									</div>
								</>
							)}
						</div>
						<div className="flex justify-center space-x-4">
							{window.innerWidth <= 640 && (
								<button
									onClick={toggleDetails}
									className={`text-gray-400 font-bold text-lg hover:text-primary focus:outline-none mb-4 ${
										theme === "dark" ? "text-gray-400" : "text-gray-600"
									}`}
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
