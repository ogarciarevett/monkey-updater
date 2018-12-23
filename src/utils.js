const fs = require('fs');
const path = require('path');

// validate if the path it's a vaild path and if is a html file
const isValidHTML = filePath => {
  try {
    const isFile = fs.statSync(filePath).isFile();

    // check if the path is a file and not another thing
    if (!isFile) {
      throw new Error(`The path :${filePath} is not a file`);
    }

    const fileExt = path.extname(filePath || '').split('.');
    const ext = fileExt[fileExt.length - 1];
    if (ext !== 'html') throw new Error('The file extension needs to be html');
    return true;
  } catch (error) {
    return new Error(error);
  }
};

// validate if the comand have more or less args of the neccesary
const isValidArgs = processArgs => {
  try {
    const correctArg = processArgs.filter(x => x.slice(-4) === 'html');
    const args = correctArg.length;
    if (args <= 0)
      throw new Error(
        'Invalid arguments provided. Supported arguments are <script> <path>. Example [yarn upload:mandrill dist/email_forgot_password]'
      );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// get the path from the node args param
const getTemplateArg = args => {
  try {
    const path = args.filter(x => x.slice(-4) === 'html');
    return path[0];
  } catch (error) {
    throw new Error(error);
  }
};

const getTemplateName = file => {
  const basename = path.basename(file);
  return basename.slice(0, -5);
};

module.exports = {
  isValidHTML,
  isValidArgs,
  getTemplateArg,
  getTemplateName
};
