import React from 'react'
import Drawer from '../components/drawer.js'
import AppBarComp from '../components/appBar.js'
import projects from '../components/project_selection.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateProject from '../components/newProject.js'


class Dashboard extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			open: true
		};
		this.handleDrawerClose = this.handleDrawerClose.bind(this)
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
	}
	
	handleDrawerOpen () {
		this.setState({ open: true });
	};

	handleDrawerClose () {
		this.setState({ open: false });
	};
	render () {
		return (
			<Router>
			<div>
				<AppBarComp drawerOpen={this.state.open} handleDrawerOpen={this.handleDrawerOpen}/>
				<Drawer open={this.state.open} handleDrawerClose={this.handleDrawerClose}/>
				<Route path='/CreateProject' component={CreateProject} />
			</div>
			</Router>
		)
	}
}

export default Dashboard