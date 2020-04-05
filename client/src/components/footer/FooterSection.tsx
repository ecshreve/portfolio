import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: "5px",
      paddingBottom: "5px",
      backgroundColor: "#5d5c61",
    },
    footer: {
      flexGrow: 1,
    },
  }),
);

export default function FooterSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.footer} variant="body1">copyright &copy; shreve.dev 2020</Typography>
      </Container>
    </div>
  );
}
