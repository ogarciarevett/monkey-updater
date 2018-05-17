const http = require('http');
const fs   = require('fs');

/*
 * 1. Create logic to make a directory to apply changes and uploads
 * 2. Also modify the template name to get the templates the user has
 */ 
let myReadStream  = fs.createReadStream('dist/test.txt');
let myWriteStream = fs.createWriteStream('dist/templateDescodified.html');

/*
 * Apply logic for-each of templates to decode and download
 */
 myReadStream.on('data', (chunk) => {
    myWriteStream.write(
        JSON.parse(chunk.toString('utf8')).replace('\\', '')
    );
});