import React from "react";
import LandingHeader from "../components/landing/LandingHeader";
import AboutSection from "../components/about/AboutSection";
import FooterSection from "../components/footer/FooterSection";
import ProjectSection from "../components/projects/ProjectSection";

export default function Home() {
	return (
		<div>
			<LandingHeader />
			<AboutSection />
			<ProjectSection />
			<FooterSection />
		</div>
	);
}
