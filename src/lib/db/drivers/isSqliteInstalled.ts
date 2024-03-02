import isModuleInstalled from '@/utils/isModuleInstalled';

function isSqliteInstalled() {
  return isModuleInstalled('@libsql/client');
}

export default isSqliteInstalled;
