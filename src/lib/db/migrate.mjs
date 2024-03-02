import { migrate } from 'drizzle-orm/libsql/migrator';
import dbMethods from './index';

const { getDb } = dbMethods;

const connectionConfig = {
  migrationsFolder: 'src/lib/db/migrations',
};

const db = await getDb();

await migrate(db.drizzle, connectionConfig);

db.client.close();
