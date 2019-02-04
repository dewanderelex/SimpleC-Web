import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = {
    SubNavigation_wrapper: {
        height: 35,
        backgroundColor: '#000',
    },
    SubNavigationButtonGroup_wrapper: {

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

    render() {

        const { classes } = this.props;

        return (
            <div className = {classes.SubNavigation_wrapper}>
                <div className = {classes.SubNavigationButtonGroup_wrapper}>
                    <Button 

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