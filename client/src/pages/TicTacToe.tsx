import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import CustomDivider from '../components/custom-divider/CustomDivider';

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
  }),
);

export default function TicTacToe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.customText} variant="h3">Tic Tac Toe</Typography>
        <CustomDivider />
      </Container>
    </div>
  );
}
