import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText} from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';

import titleInitials from '../utils/title-initials';

const styles = theme => ({

});

const ChatListItem = ({ classes, title}) => (
 <ListItem button>
   <Avatar>{titleInitials(title)}</Avatar>
   <ListItemText primary={title}/>
 </ListItem>
);

export default withStyles(styles)(ChatListItem);