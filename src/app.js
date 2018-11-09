import React from 'react'
import { render } from 'react-dom'
import StylesLogin from './login';



class App extends React.Component {
	render () {
		return (
			<StylesLogin />
		)
	}
}

render (
  < App />,
  document.getElementById('root')
)
