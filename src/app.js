import React from 'react'
import { render } from 'react-dom'
import Login from './components/login';
import Dashboard from './containers/dashboard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateProject from './components/newProject';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;


class App extends React.Component {

	constructor(props) {

		super(props)
		this.state = {
			message : "default",
      		page: "dashboard"
		}
	}

	parseElectronMessage(obj) {
		switch (obj.msg) {
			case "set_state":
				this.setState({ message: obj.data })
				break;
			case "project_setup":
				console.log("show the project setup container");
				break;
		}
	}

	componentDidMount() { 
		// set up event listener for messages from electron
		ipcRenderer.on('react_receive', (event, arg) => {
  			console.log(arg) // prints "ping"
			 this.parseElectronMessage( arg )
		})
		ipcRenderer.send('react_message', { data: 'I am react'} )
	}

	render () {
		if (this.state.page == "login") {
			return (
			<div className="mainApp">
				<div>Message: {this.state.message}</div>
				<div className="loginApp">
					<Login />
				</div>
			</div>
			)
		}
		if (this.state.page == "dashboard") {
			return (
				<Router>
				<div className="mainApp">
					<div className="loginApp">
						<Dashboard />
					</div>
				</div>
				</Router>
			)
		}
	}
}

render (
  < App />,
  document.getElementById('root')
)
