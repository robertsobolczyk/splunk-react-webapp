const React = require('react');
const ReactDOM = require('react-dom');

module.exports = {

  start: function (props) {
    ReactDOM.render(
        <h1>content of settings app</h1>,
        document.getElementById('root')
    );
  }
};
