#!/usr/bin/env node
const { program } = require('commander');
const { execSync } = require("child_process");

// Configura el comando raíz
program
  .name('nub8-cli')
  .description('Un CLI de automatización de tareas')
  .version('1.0.0')
  .option('-n, --name <name>', 'El nombre del usuario', 'mundo')
  .action(() => {
    console.log(`Hola, ${program.opts().name}!`);
  });
  
// Agrega un subcomando
program
  .command('list')
  .alias('ls')
  .description('Lista todos los elementos')
  .action(() => {
    console.log('Lista de elementos:');
    console.log('- Elemento 1');
    console.log('- Elemento 2');
    console.log('- Elemento 3');
  });
  
program
  .command('create-sst <name>')
  .description('Crea un archivo de plantilla')
  .action((name) => {
    // npx create-sst@latest --template=base/example rest-api
    console.log(`Creando el proyecto ${name}`);
    console.log(`Running: $ npx create-sst@latest ${name}`);
    execSync(`npx create-sst@latest ${name}`);
    console.log("created");
  });

program
  .command('create-crud <name>')
  .description('Crea un archivo de plantilla')
  .action((name) => {
    console.log(`Creando el archivo ${name}.sst`);
  });

// Parsea los argumentos y opciones
program.parse(process.argv);
