import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.secondary.light,
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    customText: {
      fontWeight: "bold",
    },
  }),
);

export default function Blog() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.customText} variant="h3">Blog</Typography>
      </Container>
    </div>
  );
}
