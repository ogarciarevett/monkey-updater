const MonkeyUpdater = require('../lib');
const monkeyTest = new MonkeyUpdater('some_key_here');
if(process.env.NODE_ENV === 'local_test') monkeyTest.add(
    './examples/tester.html',
    'Name here',
    'from@noreplyemail.com',
    'subject here'
    )
    .then(res => console.log(res))
    .catch(error => console.log(error));