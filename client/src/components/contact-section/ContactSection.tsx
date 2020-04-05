import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container, Grid } from '@material-ui/core';
import CustomDivider from '../my-divider/CustomDivider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: "50px",
      paddingBottom: "50px",
      backgroundColor: theme.palette.primary.light,
    },
    customLink: {
      textDecoration: "none",
    },
    customText: {
      fontWeight: "bold",
    },
  }),
);

export default function ContactSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.customText} variant="h4">Location</Typography>
            <Typography className={classes.customText} variant="h6">San Francisco</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.customText} variant="h4">Email</Typography>
            <a className={classes.customLink} href="mailto:eric@shreve.dev" target="_blank">
              <Typography className={classes.customText} variant="h6">eric@shreve.dev</Typography>
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
