import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Link, IconButton, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Email from '@material-ui/icons/Email'

import headshot from '../../img/headshot.jpeg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontSize: "large",
      paddingBottom: "25px",
    },
    headshot: {
      marginTop: "25px",
      borderRadius: "50%",
      width: "15rem",
    },
    name: {
      flexGrow: 1,
      marginTop: "10px",
      fontWeight: "bold",
      color: "#eeeeee",
    },
    icons: {
      color: "white",
      fontSize: "large",
      width: "2rem",
      height: "2rem",
    },
    iconButton: {
      borderRadius: "100%",
      borderColor: "white",
      border: "2px solid",
      margin: "5px",
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

export default function LandingHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <img className={classes.headshot} src={headshot} alt=""></img>
        <Typography variant="h2" className={classes.name}>
          Eric Shreve
        </Typography>
        <Divider className={classes.divider} variant="middle"/>
        <div>
          <IconButton className={classes.iconButton} href="https://github.com/ecshreve" target="_blank">
            <GitHubIcon className={classes.icons} />
          </IconButton>
          <IconButton className={classes.iconButton} href="https://www.linkedin.com/in/ecshreve/" target="_blank">
            <LinkedIn className={classes.icons} />
          </IconButton>
          <IconButton className={classes.iconButton} href="mailto:eric@shreve.dev" target="_blank">
            <Email className={classes.icons} />
          </IconButton>
        </div>
      </Container>
    </div>
  );
}