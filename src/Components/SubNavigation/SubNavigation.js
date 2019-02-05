import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = {
    SubNavigation_wrapper: {
        display: 'flex',
        height: 50,
        backgroundColor: '#000',
        justifyContent: 'center'
    },
    SubNavigationButtonGroup_wrapper: {
        backgroundColor: '#fff',
        
    },
    SubNavigationInfo_wrapper: {

    }
}

class SubNavigation extends Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    handleClick = () => {

    }

    render() {

        const { classes } = this.props;

        return (
            <div className = {classes.SubNavigation_wrapper}>
                <div className = {classes.SubNavigationButtonGroup_wrapper}>
                    <Button 
                        color = '#fff'
                        onClick = {() => this.handleClick}
                    />
                    <Button 
                        color = '#fff'
                        onClick = {() => this.handleClick}
                    />
                    <Button 
                        color = '#fff'
                        onClick = {() => this.handleClick}
                    />
                    <Button 
                        color = '#fff'
                        onClick = {() => this.handleClick}
                    />
                </div>
                <div className = {classes.SubNavigationInfo_wrapper}>
                    
                </div>
            </div>
        );
    }
}

SubNavigation.propTypes = {
    classes: propTypes.object.isRequired,
};

export default withStyles(styles)(SubNavigation);