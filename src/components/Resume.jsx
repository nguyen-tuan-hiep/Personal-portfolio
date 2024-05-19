import React from "react";

const Resume = ({ theme }) => (
	<section className="pt-8">
		<div className="">
			{/* <h1 className="text-3xl md:text-4xl font-bold mb-8">Resume</h1> */}

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Education
				</h2>
				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<p className="text-lg md:text-xl font-bold">
						Hanoi University of Science and Technology (HUST), Data Science -
						Machine Learning - AI - Big Data
					</p>
					<p className="text-neutral-400">Oct 2020 – Present</p>
					<p>Global Information and Communication Technology (Global ICT)</p>
					<p><b>CPA</b>: 3.xx/4.0 (Excellent)</p>
					<p><b>Status</b>: Undergraduate</p>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Publications
				</h2>
				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg ${
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
							submitted).
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Research Experiences
				</h2>
				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					} mb-4`}
				>
					<h3 className="text-lg md:text-xl font-bold mb-4">
						AIoT research group at BKAI center, HUST
					</h3>
					<ul className="list-disc list-inside space-y-1">
						<li>Research Assistant - Federated Learning for MEC networks</li>
						<li><b>Supervisor</b>: Assoc. Prof. Phi Le Nguyen</li>
						<li>
							<b>Description</b>: Formulating the hierarchical Federated Learning model
							for 3-tier MEC networks; Proposing a FL model which leverages
							knowledge distillation to handle mobility in MEC networks.
						</li>
					</ul>
				</div>
				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg ${
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
						<li><b>Supervisor</b>: Assoc. Prof. Phi Le Nguyen</li>
						<li>
							<b>Description</b>: Exploring data; Preprocessing data to handle noise,
							outlier, missing values; Analysing correlation between variables;
							Applying machine learning algorithms and deep learning models to
							perform the prediction task; writing the manuscript.
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Courseworks
				</h2>
				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg ${
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
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<ul className="list-disc list-inside space-y-2">
						<li><b>Programming Languages</b>: Python, Java, JavaScript, C/C++, SQL</li>
						<li><b>Machine Learning Libraries</b>: Scikit-learn, Numpy, Pandas</li>
						<li><b>Deep Learning Frameworks</b>: Pytorch, Tensorflow</li>
						<li><b>Web Technology</b>: NodeJs, ReactJs, TailwindCSS</li>
						<li><b>Database Management Systems</b>: PostgreSQL, MySQL, MongoDB</li>
						<li><b>Operating Systems</b>: Linux</li>
						<li><b>Editor</b>: LATEX, VScode, MS Office</li>
						<li><b>Soft skills</b>: Teamwork management, Leadership</li>
						<li><b>Others</b>: Figma, Git & Version control, Adobe services</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Honors and Awards
				</h2>
				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg ${
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
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg ${
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
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg ${
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
