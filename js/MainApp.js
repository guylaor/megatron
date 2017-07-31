import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './LeftNav';
import MainContent from './mainContent'
import '../css/style.css'

const App = () => {
	return (
		<MuiThemeProvider>
			<div className='app'>
				<LeftNav />
				<MainContent />
			</div>
		</MuiThemeProvider>
	)
};

ReactDOM.render(<App />, document.getElementById('app'));