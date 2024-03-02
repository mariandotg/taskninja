const fs = require('fs');
const path = require('path');

const databasesFolder = 'databases';
const developmentFile = 'development.sqlite';
const testFile = 'test.sqlite';

const databasesFolderPath = path.join(__dirname, databasesFolder);

if (!fs.existsSync(databasesFolderPath)) {
  fs.mkdirSync(databasesFolderPath);
}

fs.writeFileSync(path.join(databasesFolderPath, developmentFile), '');
fs.writeFileSync(path.join(databasesFolderPath, testFile), '');

console.log('Databases created successfully.');
