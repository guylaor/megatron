import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ListItems from './menuItems'

injectTapEventPlugin();

class LeftNav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: true};
  }

  handleToggle() {
  	this.setState({open: !this.state.open})
  }

	render() {
		return(
			<div>
				
		        <Drawer open={this.state.open}>
		          <MenuItem><ListItems /></MenuItem>
		        </Drawer>
    		</div>
		)
	}
};

export default LeftNav;