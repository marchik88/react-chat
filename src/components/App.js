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

class PermanentDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.appFrame}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader} />
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <Typography>{'You think water moves fast?'}</Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
