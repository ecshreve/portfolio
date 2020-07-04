import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";
import CustomDivider from "../custom-divider/CustomDivider";

import civdisc from "../../img/civdisc.png";
import jsoncsv from "../../img/jsoncsv.png";
import site from "../../img/shreve.png";
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
							imagePath={civdisc}
							projectTitle={"CivBot"}
							projectDescription={`I play a lot of Civilization online with friends, and we wanted \
                to randomly assign which civ we all play as, so I built a bot to do that.\n
                I'd never set up a build/deploy pipeline myself, so for this project I did.\n
                With Github Actions, every time a branch is pushed the test suite runs. Whenever \
                something is merged into the master branch it automatically deploys to \
                Heroku after tests pass.`}
							projectUrl={"https://github.com/ecshreve/civ-bot-go"}
							tags={["go", "discord", "heroku"]}
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							imagePath={jsoncsv}
							projectTitle={"JSON to CSV Converter"}
							projectDescription={`At work I deal with JSON formatted data pretty regularly, \
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
							projectDescription={`A few years ago I made a personal website and but I accidentally let \
                that domain expire. Then a few months ago I got bored one weekend and decided to \
                make a new website.\n\nI decided to make it with React for practice, and I thought it would \
                be fun to spin up a React app from scratch.`}
							projectUrl={"https://github.com/ecshreve/ecs-site"}
							tags={["react", "typescript", "material-ui"]}
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
