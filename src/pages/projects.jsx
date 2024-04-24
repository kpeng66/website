import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							About me.
						</div>

						<div className="subtitle projects-subtitle">
						Hey, I’m Kevin. I am in school studying for my M.S. in Computer Science at UT Austin. I also hold a B.S. in Mathematics of Computation from UCLA.
						<br></br>
						<br></br>

						I currently work at Splashtop as a data engineer supporting Product and GTM teams. I previously worked as a data analyst at Salesforce supporting the Account Development organization.

						<br></br>
						<br></br>
						
						Recently, I've found myself learning more about clean tech, mathematics, and start-ups.
						<br></br>
						<br></br>

						I grew up in the Bay Area. In my free time, I'm playing tennis, training muay thai, and snowboarding. I like to write and share my thoughts through LinkedIn posts.


						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
