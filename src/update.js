const fs = require('fs');
const axios = require('axios');
const ProgressBar = require('progress');
const { BASE_URL } = require('config').get('mandrill');
const {
  isValidHTML,
  getTemplateName,
} = require('./utils');


const bar = new ProgressBar(':bar', { total: 5 });

const fetchUpdate = async (payload) => {
  try {
    const resp = await axios.post(
      `${BASE_URL}/templates/update.json`,
      { ...payload }
    );
    bar.tick();
    bar.complete;
    return resp;
  } catch (error) {
    return Promise.reject(
      `[Error]: fetching to API URL: https://mandrillapp.com/api/1.0/templates/add.json
        with status ${error.response.status}`
    );
  }
};

const updateTemplate = async ({ templatePath, key }) => {
  try {
    if (!key) throw Error('Your need a MANDRILL SECRET KEY to do any request');
    if (!templatePath) throw Error('The path of the .html template is required');
    const validHtmlFile = isValidHTML(templatePath);
    if(!validHtmlFile) throw Error('Invalid html file');
    bar.tick();
    const template = fs.readFileSync(templatePath, { encoding: 'utf8' });
    bar.tick();
    const templateName = getTemplateName(templatePath);
    bar.tick();
    const payload = {
      key,
      name: templateName,
      code: template
    };
    console.log(`Uploading template: ${templatePath}`);
    await fetchUpdate(payload);
    bar.tick();
    console.log(`[Template]: updated! 💌`);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

module.exports = {
    updateTemplate
};
