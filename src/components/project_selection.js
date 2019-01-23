import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

class ProjectSelection extends React.Component {
  constructor (props){
    super(props);
    this.state = [
      { name: "Project1", endpoint: "http://project1/", localdir: "c://project1"},
      { name: "Project2", endpoint: "http://project2", localdir: "c://project2"},
      { name: "Project3", endpoint: "http://project3", localdir: "c://project3"},
      { name: "Project4", endpoint: "http://project3", localdir: "c://project3"}

    ]
    
  }

  eventPlaceholder(e) {
    console.log("placeholder")
  }

  render () {
    const sublist = []
    for (var i = 0; i<this.state.length; i++){
      sublist.push(this.state[i].name)
    }
    return (
      <div>
      {sublist.map((name) => {
        return (
          <ListItem button >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary= {name} onClick={this.eventPlaceholder} />
        </ListItem>
        )
      })}        
      </div>
    )
  }
}
export default ProjectSelection