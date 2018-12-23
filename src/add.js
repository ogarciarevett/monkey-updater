const fs = require('fs');
const axios = require('axios');
const ProgressBar = require('progress');
const { BASE_URL } = require('config').get('mandrill');
const {
  isValidHTML,
  getTemplateName
} = require('./utils');


const bar = new ProgressBar(':bar', { total: 5 });


const fetchAdd = async (payload) => {
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

const addTemplate = async ({
  templatePath,
  fromName,
  fromEmail,
  key,
  subject
}) => {
  try {
    if (!key) throw Error('Your need a MANDRILL SECRET KEY to do any request');
    if (!templatePath) throw Error('The path of the .html template is required');
    if (!fromEmail || !fromName) throw Error('Your need to set properly a email as fromEmail');
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
      from_email: fromEmail,
      from_name: fromName,
      subject: subject || 'without subject',
      code: template,
      publish: true,
      labels: [templateName]
    };
    console.log(`Adding template: ${templatePath}`);
    await fetchAdd(payload);
    bar.tick();
    console.log(`[Template]: added! 💌`);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

module.exports = {
  addTemplate
};
