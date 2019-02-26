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
import ProjectSelection from './project_selection'
import CreateProject from './newProject'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




export const mainListItems = (
  <div>
    <ProjectSelection />
  </div>
);

export const secondaryListItems = (
  <div>
    <Link to='/CreateProject'> CreateProject </Link>
  </div>
);

