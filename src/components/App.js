import React from 'react';
import { withStyles } from 'material-ui';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ChatPage from './ChatPage';
import WelcomePage from './WelcomePage';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const App = ({classes}) => (
  <Router>
    <div className={classes.root}>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <Route path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>  
    </div>
  </Router>  
);

export default withStyles(styles)(App);
