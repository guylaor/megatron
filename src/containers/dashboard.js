import React from 'react'
import Drawer from '../components/drawer'
import appBarComp from '../components/appBar.js'


class Dashboard extends React.Component {
	render () {
		return (
			<appBarComp  />
			< Drawer />
		)
	}
}

export default Dashboard