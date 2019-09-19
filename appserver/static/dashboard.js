const appName = 'dashboard';

const splunk = ["splunkjs/mvc", "splunkjs/mvc/searchmanager",];

require([...splunk, `/static/app/reactapp/dist/${appName}/${appName}.bundle.js`,], (mvc, SearchManager, React) => {

  React.start({
    text: "Pass from Splunk to react app anything you need...",
    SearchManager,
    mvc
  });

});
