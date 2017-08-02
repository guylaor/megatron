import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './LeftNav';
import MainContent from './mainContent';
import '../css/style.css';


class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className='app'>
					<MainContent />
				</div>
			</MuiThemeProvider>
		)
	}
};

ReactDOM.render(<App />, document.getElementById('app'));