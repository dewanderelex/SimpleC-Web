import React from 'react';
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    navigation_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0d1539',
        height: 50,
        
    },
    navigaiton_text: {
        color: '#ffffff',
        fontSize: 18,
    }
}

const Navigation = (props) => {
    
    const { classes } = props;
    
    return (
        <div className = {classes.navigation_wrapper}>
            <h1 className = {classes.navigaiton_text}>This is a text</h1>
        </div>
    );

    
};

Navigation.propTypes = {
    classes: propTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);