#!/usr/bin/env node
const { program } = require('commander');
const { execSync } = require("child_process");

// Configura el comando raíz
program
  .name('nub8-cli')
  .description('Un CLI de automatización de tareas')
  .version('1.0.0')
  .option('-n, --name <name>', 'custom username', 'mundo')
  .action(() => {
    console.log(`Hola, ${program.opts().name}!`);
  });
  
// npx github:jpossonub8/poc-cli create-sst bacao
program
  .command('create-sst <name>')
  .description('Crea un proyecto de plantilla con la ultima versión de SST')
  .action((name) => {
    // npx create-sst@latest --template=base/example rest-api
    console.log(`Creando el proyecto ${name}`);
    console.log(`Running: $ npx create-sst@latest ${name}`);
    execSync(`npx create-sst@latest ${name}`);
    console.log("Done!");
  });


// npx github:jpossonub8/poc-cli create-sst-template bacao
program
  .command('create-sst-template <name>')
  .description('Crea un proyecto de plantilla con la ultima versión de SST')
  .action((name) => {
    const command = `node tools/generator.js create-sst-template __name__=${name} --overwrite`;
    console.log(`Creando el proyecto ${name}`);
    console.log(`Running: ${command}`);
    execSync(command);
    console.log("Done!");
  });

// Parsea los argumentos y opciones
program.parse(process.argv);
