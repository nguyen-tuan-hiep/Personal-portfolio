import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ theme }) => {
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailData = {
			from_name: formData.fullname,
			from_email: formData.email,
			message: formData.message,
			to_email: "hiep454546@gmail.com",
		};

		emailjs
			.send(
				"service_3u9jc8g",
				"template_n3e4mq4",
				emailData,
				"kmsOnKZc_4qIIxs9U"
			)
			.then((result) => {
				console.log("Sent email successfully!");
				alert("Message sent successfully!");
			})
			.catch((error) => {
				console.error("Error sending message:", error);
				alert("Failed to send message. Please try again later.");
			});
	};

	return (
		<section className="pt-8">
			<div>
				<div className="mb-8">
					<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
						My location
					</h2>
					<div
						className={`bg-cardBg mb-6 p-4 md:p-6 rounded-lg shadow-lg indent-8 ${
							theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
						}`}
					>
						<p className="mb-8">
							This is my beautiful city, Hanoi, Vietnam, renowned for its rich
							history, vibrant culture, and delectable cuisine. I'm open to
							collaborating on projects or exploring new opportunities, so feel
							free to get in touch if you're around!
						</p>

						<section className="mapbox">
							<figure>
								<iframe
									src="https://www.google.com/maps/d/embed?mid=19gThV62QG4nQ6fUCs1WqdztdCKo&amp;hl=en&amp;ehbc=2E312F"
									width="100%"
									height="450"
									loading="lazy"
								></iframe>
							</figure>
						</section>
					</div>

					<div className="mb-8">
						<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
							Contact me
						</h2>
					</div>
					<div
						className={`bg-cardBg mb-6 p-4 md:p-6 rounded-lg shadow-lg indent-8 ${
							theme === "dark" ? "bg-neutral-600" : "bg-neutral-400"
						}`}
					>
						<section className="contact-form">
							<form
								className="form mb-12"
								onSubmit={handleSubmit}
							>
								<div className="input-wrapper">
									<input
										type="text"
										name="fullname"
										className="form-input"
										placeholder="Full name"
										value={formData.fullname}
										onChange={handleChange}
										required
									/>
									<input
										type="email"
										name="email"
										className="form-input"
										placeholder="Email address"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
								<textarea
									name="message"
									className="form-input"
									required
									placeholder="Your message"
									value={formData.message}
									onChange={handleChange}
								></textarea>
								<button
									type="submit"
									className={`float-right px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:text-white hover:scale-105 transform duration-300 ${
										theme === "dark"
											? "bg-neutral-200 text-black hover:bg-neutral-400"
											: "bg-neutral-200 hover:bg-neutral-500"
									}`}
								>
									<span className="font-bold">Send Message</span>
								</button>
							</form>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
