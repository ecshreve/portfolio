import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";
import CustomDivider from "../custom-divider/CustomDivider";

import civdisc from "../../img/civdisc.png";
import jeppy from "../../img/jeppy.png";
import jsoncsv from "../../img/jsoncsv.png";
import site from "../../img/shreve.png";
import lifey from "../../img/lifey.png";
import gelpers from "../../img/gelpers.png";

import ProjectCard from "../project-card/ProjectCard";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			backgroundColor: theme.palette.primary.light,
			padding: "50px",
		},
		customText: {
			fontWeight: "bold",
		},
		projectCardContainer: {
			marginTop: "50px",
			whiteSpace: "pre-line",
		},
	})
);

export default function ProjectSection() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container>
				<Typography className={classes.customText} variant="h3">
					Projects
				</Typography>
				<CustomDivider />
				<Grid container className={classes.projectCardContainer}>
					<Grid item md={4}>
						<ProjectCard
							imagePath={jeppy}
							projectTitle={"Jeppy"}
							projectDescription={`I'm a big fan of Jeopardy, I ran \
				out of episodes on Netflix, but I wanted to keep playing. So I built \
				myself an app that lets me play any historical Jeopardy game whenever I want.`}
							projectUrl={"https://github.com/ecshreve/jeppy"}
							tags={["python", "react", "typescript"]}
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							imagePath={jsoncsv}
							projectTitle={"JSON to CSV Converter"}
							projectDescription={`At work I deal with JSON formatted data regularly, \
                and fairly often I want to dump that data to CSV format to make it easier \
                to analyze. I couldn't find any existing packages that worked the way I \
                wanted them to, so I made my own.`}
							projectUrl={"https://github.com/ecshreve/jcgo"}
							tags={["go", "json"]}
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							imagePath={site}
							projectTitle={"This Website!"}
							projectDescription={`Putting together and maintaining this small website is \
				a fun way for me to practice using React from the ground up rather than just \
				cloning a fancy template and dropping my own text in.`}
							projectUrl={"https://github.com/ecshreve/ecs-site"}
							tags={["react", "typescript", "materialui"]}
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							imagePath={lifey}
							projectTitle={"Lifey"}
							projectDescription={`Conway's Game of Life is game I'd seen and read about, so I figured \
				I might as well try and implement it. It was also a fun way for me to experiment with making \
				an interactive terminal interface for something.`}
							projectUrl={"https://github.com/ecshreve/lifey"}
							tags={["go", "tview"]}
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							imagePath={gelpers}
							projectTitle={"Gelpers"}
							projectDescription={`Go is my language of choice these days for personal projects and I often \
				find myself re-writing small helper functions. This package is a convenient way for me to keep track \
				of these functions and practice writing documentation and examples for godoc.`}
							projectUrl={"https://github.com/ecshreve/gelpers"}
							tags={["go", "godoc"]}
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							imagePath={civdisc}
							projectTitle={"CivBot"}
							projectDescription={`I used to play a lot of Civilization online with friends, and we wanted \
                a way to randomly assign which leader we all played as, so I built a Discord bot to do that.`}
							projectUrl={"https://github.com/ecshreve/civ-bot-go"}
							tags={["go", "discord", "heroku"]}
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
