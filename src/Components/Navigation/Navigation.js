import React from 'react';
import propTypes from 'prop-types'
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import Avatar from '../../Components/Avatar/Avatar';

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import Button from "@material-ui/core/Button";
import {
    container,
    defaultFont,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor
  } from "../../assets/material-dashboard-react.jsx";


const headerStyle = theme => ({
    appBar: {
      backgroundColor: "#123",
      boxShadow: "none",
      borderBottom: "0",
      marginBottom: "0",
      position: "absolute",
      width: "100%",
      paddingTop: "10px",
      zIndex: "1029",
      color: "#555555",
      border: "0",
      borderRadius: "3px",
      padding: "10px 0",
      transition: "all 150ms ease 0s",
      minHeight: "50px",
      display: "block"
    },
    container: {
      ...container,
      minHeight: "50px"
    },
    flex: {
      flex: 1
    },
    title: {
      ...defaultFont,
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      margin: "0",
      "&:hover,&:focus": {
        background: "transparent"
      }
    },
    appResponsive: {
      top: "8px"
    },
    primary: {
      backgroundColor: primaryColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
    info: {
      backgroundColor: infoColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
    success: {
      backgroundColor: successColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
    warning: {
      backgroundColor: warningColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
    danger: {
      backgroundColor: dangerColor,
      color: "#FFFFFF",
      ...defaultBoxShadow
    },
  });

const Navigation = ({... props}) => {
    
    const { classes } = props;
    
    return (
        <div className = {classes.navigation_wrapper}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.container}>
                    <div className={classes.flex}>
                    {/* Here we create navbar brand, based on route name */}
                    <Button color="transparent" href="#" className={classes.title}>
                    Abcss
                    </Button>
                    </div>
                    <Hidden smDown implementation="css">
                    </Hidden>
                    <Hidden mdUp implementation="css">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                    </Hidden>
                    <Avatar />
                </Toolbar>

                </AppBar>
        </div>
    ); 
};

Navigation.propTypes = {
    classes: propTypes.object.isRequired,
};

export default withStyles(headerStyle)(Navigation);