import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container, Grid } from '@material-ui/core';
import CustomDivider from '../my-divider/CustomDivider';
import golang from '../../img/crop.png';
import typescript from '../../img/typescript.svg';
import python from '../../img/python.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.secondary.light,
      padding: "50px",      
    },
    customImage: {
      padding: "7px",
      margin: "5px",
      backgroundColor: "white",
      borderRadius: "50%",
      borderColor: "#000000",
      borderWidth: "1px",
      borderStyle: "solid",
      maxWidth: "100px",
      alignItems: "center",
      justifyContent: "center",
      "box-shadow": "10px 10px 20px 0px rgba(0,0,0,0.8)",
      "&:hover": {
        "opacity": "0.7",
        "box-shadow": "10px 10px 29px 3px rgba(0,0,0,0.8)",
      },
    },
    customText: {
      fontWeight: "bold",
    },
    languagesToolsContainer: {
      paddingTop: "25px",
      paddingBottom: "50px",
    },
  }),
);

export default function AboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.customText} variant="h3">About</Typography>
        <CustomDivider />
        <Typography className={classes.customText} variant="h6">I'm a Full Stack Software Engineer from San Francisco, currently working for Samsara.</Typography>
      </Container>
      <Container className={classes.languagesToolsContainer}>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.customText} variant="h5">Languages</Typography>
            <CustomDivider />
            <Grid container>
              <Grid item xs={4}>
                  <img className={classes.customImage} src={golang} alt="Golang" />
              </Grid>
              <Grid item xs={4}>
                <img className={classes.customImage} src={typescript} alt="" />
              </Grid>                
              <Grid item xs={4}>
                <img className={classes.customImage} src={python} alt="" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.customText} variant="h5">Tools</Typography>
            <CustomDivider />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
