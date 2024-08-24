import React from "react";

const Resume = ({ theme }) => (
	<section className="pt-8">
		<div>
			<div className="mb-4">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Education
				</h2>

				{/* <div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg mb-4 ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<p className="text-lg md:text-xl font-bold">
						Hanoi University of Science and Technology (HUST)
					</p>
					<p>
						Bachelor - Global Information and Communication Technology (Global
						ICT)
					</p>
					<p className="text-neutral-400">Oct 2020 – Sep 2024</p>
					<p>
						<b>Status</b>: Graduated (Excellent)
					</p>
				</div>

				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<p className="text-lg md:text-xl font-bold">
						National Univsersity of Singapore (NUS)
					</p>
					<p>PhD - Computer Engineering</p>
					<p className="text-neutral-400">Aug 2024 – Present</p>
					<p>
						<b>Status</b>: Expected to graduate in 2028
					</p>
				</div> */}

				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg mb-4 ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					} flex`}
				>
					{/* Left column for the timeline, with flex and items-center for vertical centering */}
					<div className="w-1/5 flex items-center text-neutral-400 pr-6">
						<div className="text-center">
							<p>Oct 2020</p>
							<p>|</p>
							<p>Sep 2024</p>
						</div>
					</div>

					{/* Right column for education details */}
					<div className="w-4/5">
						<p className="text-lg md:text-xl font-bold">
							Hanoi University of Science and Technology (HUST)
						</p>
						<p>
							Bachelor - Global Information and Communication Technology (Global
							ICT)
						</p>
						<p>
							<b>Status</b>: Graduated (Excellent)
						</p>
					</div>
				</div>

				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					} flex`}
				>
					{/* Left column for the timeline, with flex and items-center for vertical centering */}
					<div className="w-1/5 flex items-center text-neutral-400 pr-6"
					>
						<div className="text-center">
							<p>Aug 2024</p>
							<p>|</p>
							<p>Present</p>
						</div>
					</div>

					{/* Right column for education details */}
					<div className="w-4/5">
						<p className="text-lg md:text-xl font-bold">
							National University of Singapore (NUS)
						</p>
						<p>PhD - Computer Engineering</p>
						<p>
							<b>Status</b>: Expected to graduate in 2028
						</p>
					</div>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Publications
				</h2>
				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<ul className="list-disc list-inside space-y-3">
						<li>
							Claudio Kohn,{" "}
							<em>
								<strong>Tuan Hiep Nguyen</strong>
							</em>
							, Ngoc Anh Tong, Ngoc Bich Hoang, Phi Le Nguyen and Long D.
							Nghiem, “Machine learning to optimise the operation and
							maintenance of a sewer mining plant" (To be submitted) (co-first
							author)
						</li>
						<li>
							Tuan Dung Nguyen,{" "}
							<em>
								<strong>Tuan Hiep Nguyen</strong>
							</em>
							, Ngoc Anh Tong, Thanh Trung Huynh, Phi Le Nguyen, “Hierarchical
							Federated Learning in MEC Networks with Knowledge Distillation"
							(To be submitted).
						</li>
						<li>
							Quang Viet Ly,{" "}
							<em>
								<strong>Tuan Hiep Nguyen</strong>
							</em>
							, Ngoc Anh Tong, Phi Le Nguyen, “Applying Machine Learning
							techniques to predict water indices of the Mekong river" (To be
							submitted) (co-first author).
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Research Experiences
				</h2>
				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg mb-4 ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<h3 className="text-lg md:text-xl font-bold mb-4">
						AIoT research group at BKAI center, HUST
					</h3>
					<ul className="list-disc list-inside space-y-1">
						<li>Research Assistant - Federated Learning for MEC networks</li>
						<li>
							<b>Supervisor</b>: Assoc. Prof. Phi Le Nguyen
						</li>
						<li>
							<b>Description</b>: Formulating the hierarchical Federated
							Learning model for 3-tier MEC networks; Proposing a FL model which
							leverages knowledge distillation to handle mobility in MEC
							networks.
						</li>
					</ul>
				</div>
				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<h3 className="text-lg md:text-xl font-bold mb-4">
						AIoT research group at BKAI center, HUST
					</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>
							Research Assistant - Machine learning to optimise the operation
							and maintenance of a sewer mining plant
						</li>
						<li>
							<b>Supervisor</b>: Assoc. Prof. Phi Le Nguyen
						</li>
						<li>
							<b>Description</b>: Exploring data; Preprocessing data to handle
							noise, outlier, missing values; Analysing correlation between
							variables; Applying machine learning algorithms and deep learning
							models to perform the prediction task; writing the manuscript.
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Courseworks
				</h2>
				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<ul className="list-disc list-inside space-y-2">
						<li className="group">
							<a
								href="https://www.udemy.com/certificate/UC-f096802a-7d95-4d7f-b0b7-d7af9de8803f/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								The Git & Github Bootcamp - Colt Steele
							</a>
						</li>

						<li className="group">
							<a
								href="https://www.udemy.com/certificate/UC-e1d56742-0610-4208-b5e3-e335abad2e29/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								Tensorflow Developer Certificate Bootcamp - Andrei Neagoie,
								Daniel Bourke
							</a>
						</li>

						<li className="group ">
							<a
								href="https://www.udemy.com/certificate/UC-5b128eb8-42b3-48d2-b716-50fa39ea74cc/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								Python for Data Science and Machine Learning Bootcamp - Jose
								Portilla
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Skills
				</h2>
				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<ul className="list-disc list-inside space-y-2">
						<li>
							<b>Programming Languages</b>: Python, Java, JavaScript, C/C++, SQL
						</li>
						<li>
							<b>Machine Learning Libraries</b>: Scikit-learn, Numpy, Pandas
						</li>
						<li>
							<b>Deep Learning Frameworks</b>: Pytorch, Tensorflow
						</li>
						<li>
							<b>Web Technology</b>: NodeJs, ReactJs, TailwindCSS
						</li>
						<li>
							<b>Database Management Systems</b>: PostgreSQL, MySQL, MongoDB
						</li>
						<li>
							<b>Operating Systems</b>: Linux
						</li>
						<li>
							<b>Editor</b>: LATEX, VScode, MS Office
						</li>
						<li>
							<b>Soft skills</b>: Teamwork management, Leadership
						</li>
						<li>
							<b>Others</b>: Figma, Git & Version control, Adobe services
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Honors and Awards
				</h2>
				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<ul className="list-disc list-inside space-y-2">
						<li>
							Certificate of Commendation from the University President, HUST
						</li>
						<li>Student of 5 Merits Award, HUST</li>
						<li>Academic Scholarship, HUST</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					References
				</h2>
				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<ul className="list-disc list-inside">
						<li>
							Assoc. Prof. Phi Le Nguyen, Managing Director of the International
							Research Center for Artificial Intelligence (BKAI), HUST
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Social Activities
				</h2>
				<div
					className={`bg-cardBg py-5 px-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<ul className="list-disc list-inside space-y-2">
						<li>Worked at the Student Association of HUST</li>
						<li>Lead pianist at HALA band</li>
						<li>Interests: Movies, music, basketball, piano, guitar</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default Resume;
