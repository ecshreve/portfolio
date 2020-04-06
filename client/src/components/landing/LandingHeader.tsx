import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Email from '@material-ui/icons/Email'

import headshot from '../../img/headshot.jpeg'
import CustomDivider from '../custom-divider/CustomDivider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontSize: "large",
      paddingTop: "150px",
      paddingBottom: "175px",
      backgroundColor: theme.palette.primary.light,
    },
    headshot: {
      marginBottom: "25px",
      borderRadius: "50%",
      borderColor: "#ffffff",
      borderStyle: "solid",
      width: "15rem",
      "box-shadow": "5px 5px 15px 10px rgba(0,0,0,0.5)",
    },
    name: {
      flexGrow: 1,
      fontWeight: "bold",
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
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        "box-shadow": "10px 10px 29px 0px rgba(0,0,0,0.8)",
      },
    },
  }),
);

export default function LandingHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <img className={classes.headshot} src={headshot} alt=""></img>
        <Typography className={classes.name} variant="h2">
          Eric Shreve
        </Typography>
        <CustomDivider />
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