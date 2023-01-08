# monkey-uploader
Nodejs mandrill template uploader ( you only needs an API key from mailchimp )


![alt text][logo]

[logo]: https://i.pinimg.com/564x/3e/5d/70/3e5d70ae6ee1b7ed0ac08a34e368f572.jpg "Logo"
## Requirements 
1. API KEY
2. html templates

## Setup

`npm i -S monkey-updater`

```js
const MonkeyUpdater = require('monkey-uploader');
const monkeyUpdater = new MonkeyUpdater(<Your MANDRILL API KEY HERE>:String);
```

## Usages

### UPDATE TEMPLATES

```ts
monkeyUpdater.update('html_template_path_here.html')
.then(res => console.log(res))
.catch(error => console.log(error));
```

### OR ADD NEW TEMPLATES TOO

```ts
monkeyUpdater.add(
    'html_template_path_here.html',
    'Name here',
    'from@noreplyemail.com',
    'subject here'
    )
.then(res => console.log(res))
.catch(error => console.log(error));
```
