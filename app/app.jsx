const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require('react-router');

const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

// Load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>
      <Route path='countdown' component={ Countdown } />
      <IndexRoute component={ Timer } />
    </Route>
  </Router>,
  document.getElementById('app')
);
