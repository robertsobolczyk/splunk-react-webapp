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
