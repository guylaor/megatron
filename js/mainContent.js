import React from 'react';
import LeftNav from './LeftNav'
import AppBar from 'material-ui/AppBar'
import preload from '../data/articleData.json'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';


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
					<List >
						<table className="MainContentList">
							<td>
								<ListItem
									leftAvatar={<Avatar icon={<FileFolder />} />}
									rightIcon={<ActionInfo />}
									primaryText="Article Name"
									secondaryText="Jan 9, 2014"
								/>
								{preload.Articles.map(article => (
								<p>{article.Article_Name}</p>
								))}
							</td>
								<td>
								<ListItem
									leftAvatar={<Avatar icon={<FileFolder />} />}
									rightIcon={<ActionInfo />}
									primaryText="Opened By"
									secondaryText="Jan 17, 2014"
								/>
								{preload.Articles.map(article => (
								<p>{article.Opened_By}</p>
								))}
							</td>
							<td>
								<ListItem
									leftAvatar={<Avatar icon={<FileFolder />} />}
									rightIcon={<ActionInfo />}
									primaryText="Last Updated"
									secondaryText="Jan 28, 2014"
								/>
								{preload.Articles.map(article => (
								<p>{article.Last_Updated}</p>
								))}
							</td>
						</table>
					</List>
			</div>
		)
	}
};

export default MainContent;