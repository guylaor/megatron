import React from 'react';
import LeftNav from './LeftNav'
import AppBar from 'material-ui/AppBar'
import preload from '../data/articleData.json'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {blue500, yellow600} from 'material-ui/styles/colors';



class MainContent extends React.Component {

	handleTouchTapLeftIconButton() {

		state = {
    navDrawerOpen: false,
  };
	    this.setState({
	      navDrawerOpen: !this.state.navDrawerOpen,
	    });
  	};

	render() {
		return(
			<div className='mainContent'>
				<AppBar
					title="Title"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
					iconElementRight={<LeftNav />}
				/>
					<List>
						<table className="MainContentList">
							<td>
								<h3>Article Name</h3>
								{preload.Articles.map(article => (
								<ListItem
									leftAvatar={<Avatar icon={<FileFolder />} />}
									rightIcon={<ActionInfo />}
									primaryText={article.Article_Name}
									secondaryText="Jan 9, 2014"
								/>
								))}
							</td>
							<td>
								<h3>Opened By</h3>
								{preload.Articles.map(article => (
								<ListItem
									leftAvatar={<Avatar icon={<FileFolder />} />}
									rightIcon={<ActionInfo />}
									primaryText={article.Opened_By}
									secondaryText="Jan 17, 2014"
								/>
								))}
							</td>
							<td>
								<h3>Last Updated</h3>
								{preload.Articles.map(article => (
								<ListItem
									leftAvatar={<Avatar icon={<FileFolder />} />}
									rightIcon={<ActionInfo />}
									primaryText={article.Last_Updated}
									secondaryText="Jan 28, 2014"
								/>
								))}
							</td>
						</table>
					</List>
			</div>
		)
	}
};

export default MainContent;