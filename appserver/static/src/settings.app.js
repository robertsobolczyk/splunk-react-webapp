const React = require('react');
const ReactDOM = require('react-dom');
const CsdList = require('./settings/csd/csd.list').default;


const items = [{
  csdId: 'A',
  description: 'Lorem ipsum'
}, {
  csdId: 'B',
  description: 'Lorem ipsum'
}, {
  csdId: 'C',
  description: 'Lorem ipsum'
}, {
  csdId: 'D',
  description: 'Lorem ipsum'
}];


module.exports = {

  start: function (props) {
    ReactDOM.render([<div class="ui container"><h1>Settings</h1>, <CsdList items={items}/></div>],
        document.getElementById('root'));

  }
};
