import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import createBrowserHistory from 'history/createBrowserHistory';

import { createRoutes, onAuthChange } from '../imports/routes/Routes';

import '../imports/startup/simple-schema-config';

const browserHistory = createBrowserHistory();

// Running to watch the changes in the database
Tracker.autorun(() => {
  // Change userId to false if not null and then change it to true
  // If userId null, it would be false
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated, browserHistory);
});

Meteor.startup(() => {
  ReactDOM.render(createRoutes(browserHistory), document.getElementById('app'));
});
