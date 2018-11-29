import React from 'react'
import { render } from 'react-dom'
import Login from './components/login';
import Dashboard from './containers/dashboard'



class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			page: "dashboard"
		}
	}

	render () {
		if (this.state.page == "login") {
			return (
			<div className="mainApp">
				<div className="loginApp">
					<Login />
				</div>
			</div>
			)
		}
		if (this.state.page == "dashboard") {
			return (
			<div className="mainApp">
				<div className="loginApp">
					<Dashboard />
				</div>
			</div>
			)
		}
	}
}

render (
  < App />,
  document.getElementById('root')
)
