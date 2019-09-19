const React = require('react');
const ReactDOM = require('react-dom');
const CsdCreate = require('./settings/csd/csd.create').default;
const CsdList = require('./settings/csd/csd.list').default;

module.exports = {

  start: function (props) {
    ReactDOM.render([<div class="ui container"><h1>Settings</h1>, <CsdCreate/>, <CsdList/></div>],
        document.getElementById('root'));

  }
};
