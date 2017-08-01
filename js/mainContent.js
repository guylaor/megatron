import React from 'react';
import LeftNav from './LeftNav'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'



class MainContent extends React.Component {

	render() {
		return(
			<div className='mainContent'>
				<AppBar
					title="Title"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					iconElementRight={<LeftNav />}
				/>
				<p> Main Content</p>
			</div>
		)
	}
};

export default MainContent;