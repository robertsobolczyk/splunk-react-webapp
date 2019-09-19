# Splunk React App

App currently consists of two xml views: dashboard and settings
These views are separate React components that are reusing the same build system and we are able to share some code between them.

### Start

1. Create app name=reactapp, folder=reactapp
2. Update it's content

```
cd /Applications/Splunk/etc/apps/reactapp
git clone https://github.com/robertsobolczyk/splunk-react-webapp.git .
```


3. Install dependencies
`cd appserver/static && npm install`

4. Build apps `npm run build`

5. After every change inside React rebuild app and your changes should be visible after refresh

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

