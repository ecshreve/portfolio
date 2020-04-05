import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import CustomDivider from '../my-divider/CustomDivider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.secondary.light,
      paddingTop: "25px",
      paddingBottom: "25px",
    },
    header: {
      flexGrow: 1,
      fontWeight: "bold",
    },
    content: {
      fontWeight: "bold",
    }
  }),
);

export default function AboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.header} variant="h3">About</Typography>
        <CustomDivider />
        <Typography className={classes.content} variant="h6">I'm a Full Stack Software Engineer from San Francisco, currently working for Samsara.</Typography>
      </Container>
    </div>
  );
}
