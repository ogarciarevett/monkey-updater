const fs   = require('fs');
const path = require('path');

const isValidFile = filePath => {
  try {
    const isFile = fs.statSync(filePath).isFile();

    // check if the path is a file and not another thing
    if(!isFile) {
      throw new Error(`The path :${filePath} is not a file`);
    }

    const fileExt = path.extname(filePath || '').split('.');
    const ext = fileExt[fileExt.length - 1];
    return ext === 'html' ? true : false;

  } catch (error) {
    return new Error(error);
  }
}

module.exports = {
  isValidFile
}