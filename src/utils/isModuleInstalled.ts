import * as fs from 'fs';
import * as path from 'path';

function isModuleInstalled(moduleName: string) {
  const nodeModulesPath = path.resolve('node_modules', moduleName);

  try {
    fs.accessSync(nodeModulesPath, fs.constants.R_OK);
    return true;
  } catch (error) {
    return false;
  }
}

export default isModuleInstalled;
