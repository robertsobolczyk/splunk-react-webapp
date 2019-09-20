const React = require('react');
const ReactDOM = require('react-dom');
const DashboardComponent = require('./dashboard/dashboard.component').default;

module.exports = {
  start: function (props) {
    ReactDOM.render([<DashboardComponent/>], document.getElementById('root'));
  }
};
