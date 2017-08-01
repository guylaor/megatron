import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class LeftNav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
  }

  handleToggle() {
  	this.setState({open: !this.state.open})
  }

	render() {
		return(
			<div>
				<FlatButton
		          label="Side Menu"
		          onTouchTap={this.handleToggle.bind(this)}
		        />
		        <Drawer open={this.state.open}>
		          <MenuItem>Menu Item</MenuItem>
		          <MenuItem>Menu Item 2</MenuItem>
		        </Drawer>
    		</div>
		)
	}
};

export default LeftNav;