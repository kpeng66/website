import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./splashtop.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Splashtop</div>
							<div className="work-subtitle">
								Data Engineer
							</div>
							<div className="work-duration">Mar 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./salesforce.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Salesforce</div>
							<div className="work-subtitle">
								Data Analyst
							</div>
							<div className="work-duration">Aug 2022 - Mar 2023</div>
						</div>
						<div className="work">
							<img
								src="./splashtop.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Splashtop</div>
							<div className="work-subtitle">
								R&D Intern - SSW
							</div>
							<div className="work-duration">Nov 2021 - Jun 2022</div>
						</div>
						<div className="work">
							<img
								src="./salesforce.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Salesforce</div>
							<div className="work-subtitle">
								Data Analyst
							</div>
							<div className="work-duration">Jun 2021 - Sept 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
