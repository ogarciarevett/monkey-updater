const { addScript, updateScript } = require('../src');

class MonkeyUploader {
  constructor(mandrillKey) {
    this.mandrillKey = mandrillKey;
  }

  async update(templatePath) {
    try {   
      await updateScript.updateTemplate({ templatePath, key: this.mandrillKey });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async add(templatePath, fromName, fromEmail, subject) {
    try {
      await addScript.addTemplate({ 
        templatePath,
        fromName,
        fromEmail,
        key: this.mandrillKey,
        subject
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = MonkeyUploader;
