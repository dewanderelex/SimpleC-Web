/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components


import CalendarRoutes from "../../Routes/CalendarRoutes";

import Navigation from '../../Components/Navigation/Navigation';
import SubNavigation from '../../Components/SubNavigation/SubNavigation';


import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

const switchRoutes = (
  <Switch>
    {CalendarRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mobileOpen: false
      };
      this.resizeFunction = this.resizeFunction.bind(this);
    }
    handleDrawerToggle = () => {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    getRoute() {
      return this.props.location.pathname !== "/maps";
    }
    resizeFunction() {
      if (window.innerWidth >= 960) {
        this.setState({ mobileOpen: false });
      }
    }
    componentDidMount() {
      if (navigator.platform.indexOf("Win") > -1) {
        const ps = new PerfectScrollbar(this.refs.mainPanel);
      }
      window.addEventListener("resize", this.resizeFunction);
    }
    componentDidUpdate(e) {
      if (e.history.location.pathname !== e.location.pathname) {
        this.refs.mainPanel.scrollTop = 0;
        if (this.state.mobileOpen) {
          this.setState({ mobileOpen: false });
        }
      }
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.resizeFunction);
    }
    render() {
      const { classes, ...rest } = this.props;
      return (
        <div className={classes.wrapper}>
          {
            //   <Sidebar
            //   routes={dashboardRoutes}
            //   logoText={"Creative Tim"}
            //   logo={logo}
            //   image={image}
            //   handleDrawerToggle={this.handleDrawerToggle}
            //   open={this.state.mobileOpen}
            //   color="blue"
            //   {...rest}
            // />
            // <div className={classes.mainPanel} ref="mainPanel">
            //   {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
            //   {this.getRoute() ? (
            //     <div className={classes.content}>
            //       <div className={classes.container}>{switchRoutes}</div>
            //     </div>
            //   ) : (
            //     <div className={classes.map}>{switchRoutes}</div>
            //   )}
            //   {this.getRoute() ? <Footer /> : null}
            // </div>
          }
					<Navigation />
					<SubNavigation />

					<div className={classes.mainPanel} ref="mainPanel">
						<div className={classes.content}>
							<div className={classes.container}>{switchRoutes}</div>
						</div>
					</div>


        </div>
      );
    }
  }
  
  App.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(dashboardStyle)(App);
  