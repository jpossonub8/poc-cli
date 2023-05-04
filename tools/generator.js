// @ts-nocheck
const { generateTemplateFilesBatch } = require('generate-template-files')

module.exports = {
  componentWithInterface: (name = 'api-rest-template') => {
    generateTemplateFilesBatch([
      // Example of generating multiple files
      {
        option: 'create-sst-template',
        defaultCase: '(pascalCase)',
        entry: {
          folderPath: './tools/templates/sst-template-rest-api'
        },
        dynamicReplacers: [
          {
            slot: '__name__', slotValue: name
          }
        ],
        output: {
          path: './__name__SnakeCase__',
          pathAndFileNameDefaultCase: '(SnakeCase)'
        },
        onComplete: (results) => {
          console.log('results', results)
        },
      }
    ]).catch((err) => {
      console.log('Build Error');
      console.error(err);
    });
  }
}