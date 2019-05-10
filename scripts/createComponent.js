/* eslint-disable no-console */

const setupComponentFolders = require('./setupComponentFolders');

const run = async (name, destination) => setupComponentFolders.createComponent(name, destination);
const args = process.argv.slice(2);

run(args[0], args[1]).catch(error => console.error(`Error: ${error.message}`));
