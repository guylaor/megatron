import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './LeftNav';
import MainContent from './mainContent'
import '../css/style.css'

const App = () => {
	return (
		<div className='app'>
			<LeftNav />
			<MainContent />
		</div>
	)
};

render(<App />, document.getElementById('app'));