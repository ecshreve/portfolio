import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Router, Link, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Blog from '../../pages/Blog';
import Home from '../../pages/Home';
import TicTacToe from '../../pages/TicTacToe';

const history = createBrowserHistory();

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
      textDecoration: "none",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
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
            <Button component={Link} to="/blog" color="inherit">blog</Button>
          </Toolbar>
        </AppBar>
      </div>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/tictactoe" component={TicTacToe} />
      </main>
    </Router>
  );
}
