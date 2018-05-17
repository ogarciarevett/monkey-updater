const fs              = require('fs');
const mandrill        = require('mandrill-api/mandrill');
const { isValidFile } = require('../src/utils');

class MonkeyUploader {
  constructor(mandrillKey) {
    this.mandrillClient = new mandrill.Mandrill(mandrillKey);
  }

  parseHtml(path) {
    try {
      let response;
      const validHtmlFile = isValidFile(path);
      if(!validHtmlFile) throw new Error(`The ${path} is not a valid html file`)
      let template = fs.readFileSync(path, { encoding: 'utf8'} );
      template = JSON.stringify(template).replace('"', '\"')
      return template;
    } catch (error) {
      Promise.reject(error);
    }
  }

  async upload(name, templatePath) {
    try {      
      if(!this.mandrillClient)
        throw new Error('The API KEY can\'t be empty, because we need to create the mandrill client :)');
      else if(!templatePath)
        throw new Error('The template path should be exist');

        const templateCode = this.parseHtml(templatePath);
        const payload = {
          name,
          code: templateCode
        };
        
        console.log(`Updating template: ${name}`)
        await this.mandrillClient.templates.update(payload);
        console.log(`Template: ${name} updated!`)
        return;

    } catch (error) {
      return Promise.reject(error);
    }

  }
}

module.exports = MonkeyUploader;
