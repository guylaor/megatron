import React from 'react'
import Drawer from '../components/drawer.js'
import AppBarComp from '../components/appBar.js'


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
			<div>
				<AppBarComp drawerOpen={this.state.open} handleDrawerOpen={this.handleDrawerOpen}/>
				<Drawer open={this.state.open} handleDrawerClose={this.handleDrawerClose}/>
			</div>
		)
	}
}

export default Dashboard