import { Database } from '@/models/db/Database';
import DatabaseConfig from '@/models/db/DatabaseConfig';
import { dbCredentials } from '.';

export async function initializeDb(): Promise<Database> {
  const dbConfig: DatabaseConfig = {
    mode: 'default',
  };

  return new Database('sqlite', dbConfig, dbCredentials);
}
