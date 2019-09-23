# Splunk React App

App currently consists of two xml views: dashboard and settings. These views are separate React components that are reusing the same build system and we are able to share some code between them.

### Prerequisites

* node + npm installed on your local machine
* splunk

### Install

1. Download app

```
cd /Applications/Splunk/etc/apps
mkdir reactapp && git clone https://github.com/robertsobolczyk/splunk-react-webapp.git reactapp && cd reactapp
```

2. Install dependencies
`cd appserver/static && npm install`

3. Build apps `npm run build`

4. Restart splunk

### Work process

After every change inside React rebuild app and your changes should be visible after refresh

* If u want to build just one app `npm run buildDashboard` or `npm run buildSettings`


### Protips

1. Make sure that you have such configuration on your dev machine:
```
nano /Applications/Splunk//etc/system/local/web.conf

[settings]
minify_js = False
minify_css = False
js_no_cache = True
cacheEntriesLimit = 0
cacheBytesLimit = 0
enableWebDebug = True
```

2. After pulling latest changes make sure to restart splunk


### Issues

- Sometimes when I go to settings tab in the app, before the dashboard tab is rendered. Is that a splunk/caching issue or I did something wrong?
- I tried to restrict Settings tab to only admin but it seems that read access is for every role. It cannot be unchecked

### To discuss

- Currently every dashboard has hideEdit="true", which forbiddes modifing it from UI. We can turn of this function but we need to make sure that with every change a PR to repository will be made in order not to lose these changes.
- What is name of the APP? :)
- As far as I know roles and permission scope is persisted outside app itself, therefor we can not keep it in repository and will have to edit it manually on all the instances of splunk.
- Based on docs Deleting CSD results in removing all corresponding domains and tasks. Any thoughts how we want to approach it?
- csdId should be unique?
- Do we want to add any filtering or pagination to csd page? 
- do we know how many records we can except on each settings page?

### Todos
- Restrict access to settings page just for admin user
- Restrict access to kvstore/csd just to admin user
