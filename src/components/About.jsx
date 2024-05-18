import React from "react";

const About = () => (
	<section className="pt-8">
		<div className="text-white">
			{/* <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1> */}

			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">Background</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg text-lg">
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
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					What I am doing
				</h2>
				<div className="bg-cardBg p-4 md:p-6 rounded-lg shadow-lg text-lg">
					<p>
						I don't know what I am doing. I am just a student who is trying to
						learn.
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default About;
