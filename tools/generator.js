// @ts-nocheck
const { generateTemplateFilesCommandLine } = require('generate-template-files')

generateTemplateFilesCommandLine([
  // Example of generating multiple files
  {
    option: 'create-sst-template',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates'
    },
    stringReplacers: ['__name__'], 
    output: {
      path: './',
      pathAndFileNameDefaultCase: '(SnakeCase)'
    },
    onComplete: (results) => {
      console.log('results', results)
    }
  }
])