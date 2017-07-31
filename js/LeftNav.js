import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const LeftNav = React.createClass({
	render() {
		return(
			<div className='leftNav'>
				<p>Left Nav Bar</p>
				<RaisedButton label="Default" />
			</div>
		)
	}
});

export default LeftNav;