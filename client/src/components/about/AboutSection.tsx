import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container, Grid } from '@material-ui/core';
import CustomDivider from '../custom-divider/CustomDivider';
import Bubble from '../bubble/Bubble';

import golang from '../../img/crop.png';
import typescript from '../../img/typescript.svg';
import python from '../../img/python.png';
import vscode from '../../img/vscode.png'
import git from '../../img/git.png'
import datadog from '../../img/datadog.png'
import graphql from '../../img/graphql.png'
import react from '../../img/react.png'
import mysql from '../../img/mysql.png'
import docker from '../../img/docker.png'
import terraform from '../../img/terraform.png'
import grpc from '../../img/grpc.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.secondary.main,
      padding: "50px",      
    },
    customText: {
      fontWeight: "bold",
    },
    languagesToolsContainer: {
      marginTop: "25px",
      paddingTop: "25px",
      paddingBottom: "50px",
    },
    languagesContainer: {
      paddingRight: "25px",
    },
    toolsContainer: {
      paddingLeft: "25px",
    },
    bubbleContainer: {
      marginTop: "50px",
    },
    linkText: {
      color: theme.palette.text.primary,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.text.secondary,
      },
    }
  }),
);

export default function AboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.customText} variant="h3">About</Typography>
        <CustomDivider />
        <Typography 
          className={classes.customText} 
          variant="h6"
          >
          I'm a Full Stack Software Engineer from San Francisco, currently 
          working for <a className={classes.linkText} href="https://www.samsara.com/" target="_blank" rel="noopener noreferrer">Samsara</a>.
        </Typography>
      </Container>
      <Container className={classes.languagesToolsContainer}>
        <Typography className={classes.customText} variant="h5">Languages, Frameworks, and Tools</Typography>
        <CustomDivider />
        <Grid container className={classes.bubbleContainer}>
          <Grid item md={3}>
              <Bubble imagePath={golang} hoverText="golang" />
          </Grid>
          <Grid item md={3}>
            <Bubble imagePath={typescript} hoverText="typescript" />
          </Grid>                
          <Grid item md={3}>
            <Bubble imagePath={python} hoverText="python" />
          </Grid>
          <Grid item md={3}>
            <Bubble imagePath={graphql} hoverText="graphql" />
          </Grid>
          <Grid item md={3}>
            <Bubble imagePath={mysql} hoverText="mysql" />
          </Grid>
          <Grid item md={3}>
            <Bubble imagePath={react} hoverText="react" />
          </Grid>
          <Grid item md={3}>
            <Bubble imagePath={grpc} hoverText="grpc" />
          </Grid>
          <Grid item md={3}>
              <Bubble imagePath={vscode} hoverText="vscode" />
          </Grid>
          <Grid item md={3}>
            <Bubble imagePath={git} hoverText="git" />
          </Grid>                
          <Grid item md={3}>
            <Bubble imagePath={datadog} hoverText="datadog" />
          </Grid>
          <Grid item md={3}>
            <Bubble imagePath={docker} hoverText="docker" />
          </Grid>
          <Grid item md={3}>
            <Bubble imagePath={terraform} hoverText="terraform" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
