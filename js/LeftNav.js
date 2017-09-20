import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ListItems from './menuItems'
import axios from 'axios'
import {List, ListItem} from 'material-ui/List';
import SortableTree from 'react-sortable-tree';


injectTapEventPlugin();

class LeftNav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: true};

		this.state = {
			items:[]

		}
	}

	componentDidMount(){
		axios.get(`http://localhost:4000/items`)
			.then((response: {data: {items: string }}) => {
				this.setState({items: response.data});

		})
	}

	render() {

	return(
		<div>
			<Drawer open={this.state.open}>
				<SortableTree treeData={this.state.items} onChange={treeData=>this.setState({ items:treeData })} />
			</Drawer>
		</div>
	)
	}
};

export default LeftNav;