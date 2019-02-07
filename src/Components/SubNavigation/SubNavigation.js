import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typogrpahy from '@material-ui/core/Typography';

const styles = {
    SubNavigation_wrapper: {
        display: 'flex',
        height: 50,
        backgroundColor: '#555',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingLeft: 50,
				paddingRight: 50,
    },
    SubNavigationButtonGroup_wrapper: {
        
    },
    SubNavigationInfo_wrapper: {
			backgroundColor: 'transparent',
		},
		button: {
			margin: 5,
		},
		typography: {
			color: '#fff'
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
										variant = 'contained'
										color = 'primary' 
										className = {classes.button}
										
									> 
										Day
									</Button>
									<Button 
										variant = 'outlined'
										color = 'secondary' 
										className = {classes.button}
									> 
										Week
									</Button>
									<Button 
										variant = 'outlined'
										color = 'secondary' 
										className = {classes.button}
									> 
										Month
									</Button>
									<Button 
										variant = 'outlined'
										color = 'secondary' 
										className = {classes.button}
									> 
										Year
									</Button>
                </div>
                <div className = {classes.SubNavigationInfo_wrapper}>
									<Typogrpahy className = {classes.typography}>
										Information 
									</Typogrpahy>
                </div>
            </div>
        );
    }
}

SubNavigation.propTypes = {
    classes: propTypes.object.isRequired,
};

export default withStyles(styles)(SubNavigation);