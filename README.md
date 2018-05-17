# monkey-uploader
Nodejs mandrill template uploader ( only with API key and built templates )


![alt text][logo]

[logo]: https://i.pinimg.com/564x/3e/5d/70/3e5d70ae6ee1b7ed0ac08a34e368f572.jpg "Logo"
## Requirements 
1. API KEY
2. html templates

## Install

`npm i -S monkey-updater`

## Usages

```
const MonkeyUpdater = require('MonkeyUpdater');
const monkeyUpdater = new MonkeyUpdater(<Your MANDRILL API KEY HERE>:String);
monkeyUpdater.upload('templateName',  __dirname + '/template.html');
```