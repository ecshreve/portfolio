import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Router, Link, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from '../../pages/Home';

const history = createBrowserHistory();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: theme.palette.primary.main,
      position: "fixed",
    },
    title: {
      flexGrow: 1,
      textDecoration: "none",
    },
  }),
);

export default function TopNavBar() {
  const classes = useStyles();

  return (
    <Router history={history}>
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <Typography className={classes.title} component={Link} to="/" align="left" variant="h6" >
              shreve.dev
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <main>
        <Route exact path="/" component={Home} />
      </main>
    </Router>
  );
}
