import React, {Component, useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    customImage: {
      padding: "7px",
      margin: "5px",
      backgroundColor: "white",
      borderRadius: "50%",
      borderColor: "#000000",
      borderWidth: "1px",
      borderStyle: "solid",
      width: "100px",
      alignItems: "center",
      justifyContent: "center",
      "box-shadow": "10px 10px 20px 0px rgba(0,0,0,0.8)",
    },
    customImageHover: {
      padding: "7px",
      margin: "5px",
      backgroundColor: "white",
      borderRadius: "50%",
      borderColor: "#000000",
      borderWidth: "1px",
      borderStyle: "solid",
      width: "100px",
      alignItems: "center",
      justifyContent: "center",
      opacity: "0.1",
      "box-shadow": "10px 10px 30px 3px rgba(0,0,0,0.8)",
    },
    container: {
      position: "relative",
      color: "white",
      textAlign: "center",
      marginBottom: "25px",
    },
    overlayText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontWeight: "bold",
    },
  }),
);

type BubbleProps = {
  imagePath: string
  hoverText: string
}

export default function Bubble(props: BubbleProps) {
  const [showOverlay, toggleShowOverlay] = useState(false)
  const classes = useStyles()

  return (
    <div className={classes.container} onMouseEnter={() => {toggleShowOverlay(true)}} onMouseLeave={() => {toggleShowOverlay(false)}} >
      <img className={(showOverlay ? classes.customImageHover : classes.customImage)} src={props.imagePath} alt={props.hoverText} />
      {showOverlay && <Typography className={classes.overlayText} variant="h6">{props.hoverText}</Typography>}
    </div>
  );
  
}