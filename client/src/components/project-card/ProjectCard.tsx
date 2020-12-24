import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
	Typography,
	Container,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	CardActions,
	Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: "350px",
			marginBottom: "25px",
		},
		cardContentContainer: {
			transition: "all .25s linear",
			"box-shadow": "0px 1px 2px 0px rgba(0,0,0,0.4)",
			"&:hover": {
				"box-shadow": "10px 10px 29px 0px rgba(0,0,0,0.8)",
			},
		},
		cardContent: {
			backgroundColor: theme.palette.secondary.main,
		},
		cardMedia: {
			height: "150px",
			backgroundColor: theme.palette.grey[300],
			padding: "5px",
		},
		cardActionArea: {
			backgroundColor: theme.palette.primary.main,
		},
		cardActionButton: {
			"&:hover": {
				backgroundColor: theme.palette.primary.dark,
			},
		},
		cardNoActionButton: {
			"&:hover": null,
		},
	})
);

type ProjectCardProps = {
	imagePath: string;
	projectTitle: string;
	projectDescription: string;
	projectUrl: string;
	tags: string[];
};

export default function ProjectCard(props: ProjectCardProps) {
	const classes = useStyles();
	let tagToUrlMap = new Map();
	tagToUrlMap.set("go", "https://golang.org/");
	tagToUrlMap.set("discord", "https://discord.com/developers/docs/intro");
	tagToUrlMap.set("json", "https://www.json.org/");
	tagToUrlMap.set("typescript", "https://www.typescriptlang.org/index.html");
	tagToUrlMap.set("react", "https://reactjs.org/");
	tagToUrlMap.set("heroku", "https://www.heroku.com/home");
	tagToUrlMap.set("materialui", "https://material-ui.com/");
	tagToUrlMap.set("tview", "https://github.com/rivo/tview");
	tagToUrlMap.set("godoc", "https://godoc.org/");

	const getButtonForTag = (tag: string) => {
		const tagUrl = tagToUrlMap.get(tag);
		if (tagUrl) {
			return (
				<Button
					className={classes.cardActionButton}
					size="small"
					href={tagUrl}
					target="_blank"
				>
					{tag}
				</Button>
			);
		} else {
			return (
				<Button disabled size="small">
					{tag}
				</Button>
			);
		}
	};

	const renderButtons = (tags: string[]) => {
		const buttons = [];

		for (let tag of tags) {
			buttons.push(getButtonForTag(tag));
		}

		return buttons;
	};

	return (
		<div className={classes.root}>
			<Container>
				<Card raised>
					<CardActionArea href={props.projectUrl} target="_blank">
						<div className={classes.cardContentContainer}>
							<CardMedia
								className={classes.cardMedia}
								image={props.imagePath}
							/>
							<CardContent className={classes.cardContent}>
								<Typography
									gutterBottom
									variant="h5"
									align="left"
									component="h2"
								>
									{props.projectTitle}
								</Typography>
								<Typography align="left" variant="body2" color="textSecondary">
									{props.projectDescription}
								</Typography>
							</CardContent>
						</div>
					</CardActionArea>
					<CardActions className={classes.cardActionArea}>
						{renderButtons(props.tags)}
					</CardActions>
				</Card>
			</Container>
		</div>
	);
}
