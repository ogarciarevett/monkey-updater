<div align="center">

<img src="assets/monkey-updater.svg" width="180" alt="monkey-updater: a monkey holding an envelope">

# monkey-updater

**Upload local HTML templates to the Mandrill API with Node.js.**

[![license: MIT](https://img.shields.io/badge/license-MIT-22a06b)](LICENSE)
[![language: JavaScript](https://img.shields.io/badge/language-JavaScript-b89a21)](src/)
[![runtime: Node.js](https://img.shields.io/badge/runtime-Node.js-287ec1)](package.json)

Works with **Node.js** · **Mandrill**

</div>

---

Nodejs mandrill template uploader ( you only needs an API key from mailchimp )


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
