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
								src="./slack.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Slack</div>
							<div className="work-subtitle">
								Analyst (Data) - Product & GTM
							</div>
							<div className="work-duration">May 2024 - Present</div>
						</div>
						<div className="work">
							<img
								src="./splashtop.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Splashtop</div>
							<div className="work-subtitle">
								Analyst - Data Engineering
							</div>
							<div className="work-duration">Mar 2023 - May 2024</div>
						</div>

						<div className="work">
							<img
								src="./salesforce.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Salesforce</div>
							<div className="work-subtitle">
								Analyst (Data) - GTM
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
								Intern (R&D)
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
								Intern (Data) - GTM
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
