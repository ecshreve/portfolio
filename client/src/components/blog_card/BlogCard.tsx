import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container, Card, CardContent, CardMedia, CardActionArea, CardActions, Button } from '@material-ui/core';
import { Link, LinkProps, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "350px",
    },
    cardContentContainer: {
      transition: "all .25s linear",
      "box-shadow": "0px 1px 2px 0px rgba(0,0,0,0.4)",
      "&:hover": {
        "box-shadow": "10px 10px 29px 0px rgba(0,0,0,0.8)",
      },
    },
    cardContent: {
      backgroundColor: theme.palette.secondary.light,
    },
    cardMedia: {
      height: "150px",
      backgroundColor: theme.palette.grey[300],
      padding: "5px",
    },
    cardActionArea: {
      backgroundColor: theme.palette.primary.light,
    },
    cardActionButton: {
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    }
  }),
);

type BlogCardProps = {
  imagePath: string
  blogItemTitle: string
  tags: string[]
  tagToUrlMap: Map<string, string>
}

export default function BlogCard(props: BlogCardProps) {
  const classes = useStyles();
  let {url} = useRouteMatch();

  const getButtonForTag = (tag: string) => {
    const tagUrl = props.tagToUrlMap.get(tag)
    if (tagUrl) {
      return (
        <Button className={classes.cardActionButton} size="small" href={tagUrl} target="_blank">
          {tag}
        </Button>
      )
    }
  }

  const renderButtons = (tags: string[]) => {
    const buttons = []

    for(let tag of tags) {
      buttons.push(getButtonForTag(tag))
    }

    return buttons
  }

  return (
    <div className={classes.root}>
      <Container>
        <Card raised >
          <CardActionArea component={Link} to={`${url}/tictactoe`}>
            <div className={classes.cardContentContainer}>
              <CardMedia 
                className={classes.cardMedia}
                image={props.imagePath}
              />
              <CardContent  className={classes.cardContent}>
                <Typography gutterBottom variant="h5" align="left" component="h2" >{props.blogItemTitle}</Typography>
                <Typography align="left" variant="body2" color="textSecondary" component="p">
                  Lorem Ipsum.
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
