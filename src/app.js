import React from 'react'
import { render } from 'react-dom'
import Login from './components/login';



class App extends React.Component {
	render () {
		return (
			<div className="mainApp">
				<div className="loginApp">
					<Login />
				</div>
			</div>

		)
	}
}

render (
  < App />,
  document.getElementById('root')
)
