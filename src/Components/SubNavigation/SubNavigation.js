import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Day from '../Day/Day';
import Week from '../Week/Week';
import Month from '../Month/Month';
import Year from '../Year/Year';

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
					value: 'week_btn',
				}
				this.handleClickDay = this.handleClickDay.bind(this);
				this.handleClickWeek = this.handleClickWeek.bind(this);
				this.handleClickMonth = this.handleClickMonth.bind(this);
				this.handleClickYear = this.handleClickYear.bind(this);
    }

		handleClickDay = () => {
			this.setState({value: 'day_btn'})
		}

		handleClickMonth = () => {
			this.setState ({value: 'month_btn'})
		}

		handleClickWeek = () => {
			this.setState ({value: 'week_btn'})
		}

		handleClickYear = () => {
			this.setState ({value: 'year_btn'})
		}

    render() {

        const { classes } = this.props;

        return (
						<div>
								<div className = {classes.SubNavigation_wrapper}>
									<div className = {classes.SubNavigationButtonGroup_wrapper}>
										<Button 
											variant = 'contained'
											color = 'primary' 
											className = {classes.button}
											key = 'day_btn'
											onClick = {this.handleClickDay}
										> 
											Day
										</Button>
										<Button 
											variant = 'outlined'
											color = 'secondary' 
											className = {classes.button}
											key = 'week_btn'
											onClick = {this.handleClickWeek}
										> 
											Week
										</Button>
										<Button 
											variant = 'outlined'
											color = 'secondary' 
											className = {classes.button}
											key = 'month_btn'
											onClick = {this.handleClickMonth}
										> 
											Month
										</Button>
										<Button 
											variant = 'outlined'
											color = 'secondary' 
											className = {classes.button}
											key = 'year_btn'
											onClick = {this.handleClickYear}
										> 
											Year
										</Button>
									</div>
									<div className = {classes.SubNavigationInfo_wrapper}>
										<Typography className = {classes.typography}>
											Information 
										</Typography>
									</div>
							</div>

							<div> 
								{this.state.value === 'day_btn' && <Day />}
								{this.state.value === 'week_btn' && <Week />}
								{this.state.value === 'month_btn' && <Month />}
								{this.state.value === 'year_btn' && <Year />}
							</div>

						</div>
            
        );
    }
}

SubNavigation.propTypes = {
    classes: propTypes.object.isRequired,
};

export default withStyles(styles)(SubNavigation);