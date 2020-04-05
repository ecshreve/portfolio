import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    divider: {
      marginLeft: "40%",
      marginRight: "40%",
      marginTop: "10px",
      marginBottom: "10px",
      height: ".25rem",
      backgroundColor: "white",
      borderRadius: "1rem",
    }
  }),
);

export default function CustomDivider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider className={classes.divider} variant="middle"/>
    </div>
  );
}