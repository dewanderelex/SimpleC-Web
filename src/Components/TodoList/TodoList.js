import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import axios from 'axios';

import { Data } from '../../assets/FakeData/Data';

const FINALURL = 'https://simplec.herokuapp.com/api/todos/';

const TEMPAUTH = 'Bearer 1234abcd';

const styles = theme => ({
	TodoList_wrapper: {
		width: '100%',
		maxWidth: 400,
		minHeight: window.outerHeight,
    backgroundColor: theme.palette.background.paper,
	}
});

class TodoList extends Component {
	
	constructor (props) {
		super(props);
		// const { userToken } = props;
		this.state = {
			checked: [0],
			// token: userToken,
		}
		this.handleToggle = this.handleToggle.bind(this);
	}

	componentDidMount() {

		const { userToken } = this.props;
		this.setState ({userToken});
		console.log(this.state.userToken);
		// TODO: API Configuration
		this.getAllToDo (TEMPAUTH); 
	}

	getAllToDo = (token) => {
		const instance = {
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json',
			},
		};
		axios.get(FINALURL, instance).then((response) => {console.log(response)});
	}

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };
	
	render() {

		const { classes } = this.props;

		return (
			<div>
				<PerfectScrollbar>
					<List className={classes.TodoList_wrapper}>
						{Data.map(value => (
							<ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
								<Checkbox
									checked={this.state.checked.indexOf(value) !== -1}
									tabIndex={-1}
									disableRipple
								/>
								<ListItemText primary={value.value} />
								<ListItemSecondaryAction>
									<IconButton aria-label="Comments">
										<CommentIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						))}
					</List>
    		</PerfectScrollbar>
			</div>
		);
	}
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);