import React, { Component } from 'react';
import LeftNav from './LeftNav'
import AppBar from 'material-ui/AppBar'
import preload from '../data/articleData.json'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {blue500, yellow600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';



class MainContent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			articles:[]
		};
	}

	componentDidMount () {
		axios.get(`http://localhost:3000/Articles`)
			.then((response: {data: {Article_Name: string }}) => {
				this.setState({articles: response.data});
				console.log(this.state.articles)
			})
	}

	handleTouchTapLeftIconButton() {

		state = {
    		navDrawerOpen: false,
  		};
	    this.setState({
	      navDrawerOpen: !this.state.navDrawerOpen,
	    });
  	};

	render() {

		let articleComponent;
		articleComponent = (this.state.articles.map(article=>

			<ListItem key={article.id}				
				className="articleComponent"
				leftAvatar={<Avatar icon={<FileFolder />} />}
				primaryText={article.Article_Name}
				secondaryText={article.Last_Updated}
			/>
			));
		let openedComponent;
		openedComponent = (this.state.articles.map(article=>

			<ListItem key={article.id}
				primaryText="Opened By:"
				secondaryText={article.Opened_By}
			/>
			));
		
		return(
			<div className='mainContent'>
				<AppBar
					title="Title"
					onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
					iconElementRight={<LeftNav />}
				/>
					<table className="MainContentList">
						<thead>
							<tr>
								<th />
							</tr>
						</thead>
						<tbody>
						<tr>
							<td >
								<h3 className="ArticleHeader">Article</h3>
							</td>			
						</tr>
						<tr>
							<td>
								{articleComponent}
							</td>
							<td>
								{openedComponent}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

		)
	}
};

export default MainContent;