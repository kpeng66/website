import React from "react";

function article_1() {
	return {
		date: "Feb 2024",
		title: "Scale Microgrids - The Future",
		description:
			"Microgrids will eventually replace the traditional power grid, but we can't do it without software.",
		link: "https://www.linkedin.com/posts/kevin-peng-421098176_scale-microgrids-activity-7158164469452271616-dXMn?utm_source=share&utm_medium=member_desktop",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Feb 2024",
		title: "Energy Management and Climate Prediction Software",
		description:
			"Two of the most critical software solutions for climate change are energy management and climate prediction.",
		link: "https://www.linkedin.com/posts/kevin-peng-421098176_two-weeks-ago-i-wrote-about-the-often-overlooked-activity-7155627768574078977-D78b?utm_source=share&utm_medium=member_desktop",
		style: ``,
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Jan 2024",
		title: "A (Software) Roadmap for Climate Change",
		description:
			"How and why software solutions are essential in the fight against climate change.",
		link: "https://www.linkedin.com/posts/kevin-peng-421098176_climatechangesolutions-greentech-softwareengineering-activity-7150546793527672832-w3Xb?utm_source=share&utm_medium=member_desktop",
		style: ``,
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "Mar 2024",
		title: "Math is Art",
		description:
			"A look at how mathematics is more of an art than a science.",
		link: "https://www.linkedin.com/posts/kevin-peng-421098176_ever-found-yourself-believing-you-were-skilled-activity-7175891295012356096-3Egd?utm_source=share&utm_medium=member_desktop",
		style: ``,
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "Jun 2024",
		title: "Clacks",
		description:
			"A mindboggling problem, and my attempt to justify it.",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7204527482643873792/",
		style: ``,
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_5, article_4, article_1, article_2, article_3,];

export default myArticles;