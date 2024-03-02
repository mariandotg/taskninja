import { Database } from '@/models/db/Database';
import { initializeDb } from './initializeDb';
import getEnvironmentSpecificDbCredential from '@/utils/getEnvironmentSpecificDbCredential';
import { dbCredentialsSchema } from '@/models/db/DatabaseCredentials';

let dbInstance: Database | null = null;

export async function getDb() {
  if (!dbInstance) {
    dbInstance = await initializeDb();
  }

  return dbInstance;
}

const DATABASE_URL = getEnvironmentSpecificDbCredential('URL');
const DATABASE_AUTHTOKEN = getEnvironmentSpecificDbCredential('AUTHTOKEN');

/**
 * Database validated credentials
 */
export const dbCredentials = dbCredentialsSchema.parse({
  url: DATABASE_URL,
  authToken: DATABASE_AUTHTOKEN,
});
