import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import preload from '../data/navBarData.json'

const ListItems = () => (
  <div className="ListItems">
    <List>
      <Subheader>Folders</Subheader>
      {preload.types.map(type => (
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        primaryText={type.What}
        initiallyOpen={false}
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem
          key={1}
          primaryText={type.Subject}
          leftIcon={<FileFolder />}
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem
              key={1}
              primaryText={type.Sub_Subject}
              leftIcon={<FileFolder />}
            />
            ]}
          />
        ]}
      />
      ))}
    </List>
  </div>
);

export default ListItems;