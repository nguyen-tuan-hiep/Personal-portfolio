import React from "react";

const About = ({ theme }) => (
	<section className="pt-8">
		<div className="">
			{/* <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1> */}

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Background
				</h2>
				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg indent-8 ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<p>
						I am a dedicated Research Assistant based in Hanoi, Vietnam, with a
						strong passion for technology and innovation. My expertise spans
						across various domains including web development, data science,
						machine learning, and artificial intelligence.
					</p>
					<br />
					<p>
						With a solid background in these fields, I actively contribute to
						research projects, leveraging cutting-edge technologies to address
						complex challenges.
					</p>
					<br />
					<p>
						I thrive in dynamic environments where I can apply my skills to
						drive impactful outcomes. As a forward-thinking individual, I am
						committed to continuous learning and growth, striving to make
						meaningful contributions to the advancement of technology.
					</p>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					What I am doing
				</h2>
				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg indent-8 ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<p>
						I'm just a student learning as I go, figuring things out as I go
						along.
					</p>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
					Favorite quotes
				</h2>
				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg indent-8 ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					} mb-4`}
				>
					<p>
						<i>
							"Success is not the key to happiness. Happiness is the key to
							success. If you love what you are doing, you will be successful."
						</i>
						{" "}- <b>Albert Schweitzer</b>
					</p>
				</div>

				<div
					className={`bg-cardBg p-4 md:p-6 rounded-lg shadow-lg indent-8 ${
						theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
					}`}
				>
					<p>
						<i>
							"Trăm triệu hạt mưa rơi không có hạt nào rơi nhầm chỗ. Tất cả
							những người ta từng gặp không một ai là ngẫu nhiên."
						</i>
						{"  "}- <b>Thiền Sư Thích Nhất Hạnh</b>
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default About;
