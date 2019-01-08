import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - 320px)`,
  },
  'appBar-left': {
    marginLeft: 320,
    backgroundColor: 'red',
  },
  'appBar-right': {
    marginRight: 320,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: 'calc(100%-56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]:{
      height: 'calc(100%-64px)',
      marginTop: 64,
    },
  },
});

const Sidebar =({ classes, chats}) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader}>
      <TextField
        fullWidth
        maring="normal"
        placeholder="Search chats..."
      />
    </div>
    <Divider />
    <ChatList chats={chats} />
    <BottomNavigation showLabels>
      <BottomNavigationAction label="My Chats" icon="{<RestoreIcon>}"/>
      <BottomNavigationAction label="Explore" icon="{<ExploreIcon>}"/>
    </BottomNavigation>
  </Drawer>  
);

export default withStyles(styles)(Sidebar);
