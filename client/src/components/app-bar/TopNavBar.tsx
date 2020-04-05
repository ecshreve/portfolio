import React from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function TopNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography align="left" variant="h6" className={classes.title}>
            shreve.dev
          </Typography>
          <Button color="inherit">about</Button>
          <Button color="inherit">blog</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
