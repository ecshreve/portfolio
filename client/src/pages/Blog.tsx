import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import CustomDivider from '../components/custom-divider/CustomDivider';
import BlogCard from '../components/blog-card/BlogCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.light,
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    customText: {
      fontWeight: "bold",
    },
    blogCard: {
      textDecoration: "none",
    }
  }),
);

export default function Blog() {
  const classes = useStyles();

  let tagToUrlMap = new Map<string, string>();
  tagToUrlMap.set("golang", "https://golang.org");
  tagToUrlMap.set("tictactoe", "https://en.wikipedia.org/wiki/Tic-tac-toe");

  let ticTacToeTags: Array<string> = ["golang", "tictactoe"]

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.customText} variant="h3">Blog</Typography>
        <CustomDivider />
        <Grid container>
          <Grid className={classes.blogCard} item xs={6}>
            <BlogCard imagePath="/static/images/tictactoe.png" blogItemTitle="Tic Tac Toe" tags={ticTacToeTags} tagToUrlMap={tagToUrlMap}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
