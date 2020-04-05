import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container, Grid } from '@material-ui/core';
import CustomDivider from '../my-divider/CustomDivider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: "25px",
      paddingBottom: "25px",
      backgroundColor: theme.palette.primary.light,
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

export default function ContactSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.header} variant="h4">Location</Typography>
            <Typography className={classes.content} variant="h6">San Francisco</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.header} variant="h4">Email</Typography>
            <Typography className={classes.content} variant="h6">eric@shreve.dev</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
