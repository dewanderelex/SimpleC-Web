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
		borderWidth: 2,
		color: '#fff',
		height: 30,
		width: 40,
		margin: 10,
		padding: '0 30px',
	},
	buttonActive: {
		background: 'linear-gradient(45deg, rgba(255,71,15,1) 0%, rgba(242,226,2,1) 100%)',
		border: 0,
		borderRadius: 3,
		color: 'white',
		height: 30,
		width: 40,
		margin: 10,
		padding: '0 30px',
	},
	info_subNavigation: {
		color: '#fff'
	},
	textButton: {
		fontSize: 10,
		color: '#fff',
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
											variant = 'outlined'
											color = 'secondary'
											className = {this.state.value === 'day_btn' ? classes.buttonActive : classes.button} 
											onClick = {this.handleClickDay}
										> 
											<Typography className = {classes.textButton}>
												Day
											</Typography>
										</Button>

										<Button 
											variant = 'outlined'
											color = 'secondary'
											className = {this.state.value === 'week_btn' ? classes.buttonActive : classes.button} 
											onClick = {this.handleClickWeek}
										> 
											<Typography className = {classes.textButton}>
												Week
											</Typography>
										</Button>

										<Button
											variant = 'outlined'
											color = 'secondary' 
											className = {this.state.value === 'month_btn' ? classes.buttonActive : classes.button} 
											onClick = {this.handleClickMonth}
										> 
											<Typography className = {classes.textButton}>
												Month
											</Typography>
										</Button>

										<Button 
											variant = 'outlined'
											color = 'secondary'
											className = {this.state.value === 'year_btn' ? classes.buttonActive : classes.button} 
											onClick = {this.handleClickYear}
										> 
											<Typography className = {classes.textButton}>
												Year
											</Typography>
										</Button>
									</div>
									<div className = {classes.SubNavigationInfo_wrapper}>
										<Typography className = {classes.info_subNavigation}>
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