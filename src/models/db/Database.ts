import { LibSQLDatabase, drizzle } from 'drizzle-orm/libsql';
import { Client, createClient } from '@libsql/client';
import isSqliteInstalled from '../../lib/db/drivers/isSqliteInstalled';
import { DatabaseCredentials } from './DatabaseCredentials';
import DatabaseDriver from './DatabaseDriver';
import DatabaseConfig from './DatabaseConfig';
import * as schema from '../../lib/db/schema';

export class Database {
  private dbCredentials: DatabaseCredentials;
  driver: DatabaseDriver;
  // TODO: Create a generic DatabaseClient class
  client: Client;
  config: DatabaseConfig;
  // TODO: Create a generic DatabaseORM class
  drizzle: LibSQLDatabase<typeof schema>;

  constructor(
    driver: DatabaseDriver,
    config: DatabaseConfig | undefined,
    dbCredentials: DatabaseCredentials
  ) {
    this.dbCredentials = dbCredentials;
    this.driver = driver;
    this.config = config || { mode: 'default' };

    this.client = this.initializeConnection();
    this.drizzle = this.initializeDrizzle();
  }

  // TODO: Create a closeConnection() method
  private initializeConnection() {
    if (!isSqliteInstalled()) {
      throw new Error('SQLite driver not installed (missing @libsql/client)');
    }
    console.log(this.dbCredentials);
    return createClient(this.dbCredentials);
  }

  private initializeDrizzle() {
    return drizzle(this.client, this.config);
  }
}
