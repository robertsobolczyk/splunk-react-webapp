const React = require('react');
const ReactDOM = require('react-dom');
const SettingsComponent = require('./settings/settings.component').default;

module.exports = {
  start: function (props) {
    ReactDOM.render([<SettingsComponent/>], document.getElementById('root'));
  }
};
