import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import CustomDivider from '../my-divider/CustomDivider';

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

export default function AboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.customText} variant="h3">About</Typography>
        <CustomDivider />
        <Typography className={classes.customText} variant="h6">I'm a Full Stack Software Engineer from San Francisco, currently working for Samsara.</Typography>
      </Container>
    </div>
  );
}
