import React from "react";

const Resume = () => (
	<section className="pt-8">
		<div className="text-white">
			{/* <h1 className="text-3xl md:text-4xl font-bold mb-8">Resume</h1> */}

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">
					Education
				</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg">
					<p className="text-lg md:text-xl font-bold">
						Hanoi University of Science and Technology (HUST), Data Science -
						Machine Learning - AI - Big Data
					</p>
					<p className="text-gray-400">Oct 2020 – Present</p>
					<p>Global Information and Communication Technology (Global ICT)</p>
					<p>CPA: 3.67/4.0</p>
					<p>Status: Undergraduate</p>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">
					Publications
				</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg">
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
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">
					Research Experiences
				</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg mb-4">
					<h3 className="text-lg md:text-xl font-bold mb-4">
						AIoT research group at BKAI center, HUST
					</h3>
					<ul className="list-disc list-inside space-y-1">
						<li>Research Assistant - Federated Learning for MEC networks</li>
						<li>Supervisor: Assoc. Prof. Phi Le Nguyen</li>
						<li>
							Description: Formulating the hierarchical Federated Learning model
							for 3-tier MEC networks; Proposing a FL model which leverages
							knowledge distillation to handle mobility in MEC networks.
						</li>
					</ul>
				</div>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg">
					<h3 className="text-lg md:text-xl font-bold mb-4">
						AIoT research group at BKAI center, HUST
					</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>
							Research Assistant - Machine learning to optimise the operation
							and maintenance of a sewer mining plant
						</li>
						<li>Supervisor: Assoc. Prof. Phi Le Nguyen</li>
						<li>
							Description: Exploring data; Preprocessing data to handle noise,
							outlier, missing values; Analysing correlation between variables;
							Applying machine learning algorithms and deep learning models to
							perform the prediction task; writing the manuscript.
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">
					Courseworks
				</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg">
					<ul className="list-disc list-inside space-y-2">
						<li className="group">
							<div className="tooltip">
								<a
									href="https://www.udemy.com/certificate/UC-f096802a-7d95-4d7f-b0b7-d7af9de8803f/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									The Git & Github Bootcamp - Colt Steele
								</a>
								<span className="tooltiptext">
									Certificate no: UC-f096802a-7d95-4d7f-b0b7-d7af9de8803f
								</span>
							</div>
						</li>


            <li className="group ">
							<div className="tooltip">
								<a
									href="https://www.udemy.com/certificate/UC-e1d56742-0610-4208-b5e3-e335abad2e29/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									Tensorflow Developer Certificate Bootcamp - Andrei Neagoie,
									Daniel Bourke
								</a>
								<span className="tooltiptext">
									{" "}
									Certificate no: UC-e1d56742-0610-4208-b5e3-e335abad2e29
								</span>
							</div>
						</li>

						<li className="group ">
							<div className="tooltip">
								<a
									href="https://www.udemy.com/certificate/UC-5b128eb8-42b3-48d2-b716-50fa39ea74cc/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									Python for Data Science and Machine Learning Bootcamp - Jose
									Portilla
								</a>
								<span className="tooltiptext">
									{" "}
									Certificate no: UC-5b128eb8-42b3-48d2-b716-50fa39ea74cc
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">
					Skills
				</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg">
					<ul className="list-disc list-inside space-y-2">
						<li>Programming Languages: Python, Java, JavaScript, C/C++, SQL</li>
						<li>Machine Learning Libraries: Scikit-learn, Numpy, Pandas</li>
						<li>Deep Learning Frameworks: Pytorch, Tensorflow</li>
						<li>Web Technology: NodeJs, ReactJs, TailwindCSS</li>
						<li>Database Management Systems: PostgreSQL, MySQL, MongoDB</li>
						<li>Operating Systems: Linux</li>
						<li>Editor: LATEX, VScode, MS Office</li>
						<li>Soft skills: Teamwork management, Leadership</li>
						<li>Others: Figma, Git & Version control, Adobe services</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">
					Honors and Awards
				</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg">
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
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">
					References
				</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg">
					<ul className="list-disc list-inside">
						<li>
							Assoc. Prof. Phi Le Nguyen, Managing Director of the International
							Research Center for Artificial Intelligence (BKAI), HUST
						</li>
					</ul>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">
					Social Activities
				</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg">
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
