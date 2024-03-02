import type { Config } from 'drizzle-kit';
import { dbCredentials } from '@/lib/db';
import { ENVIRONMENT } from '@/lib/config';
import { Environment } from '@/models/common/Environment';

const { url, authToken } = dbCredentials;

const baseConfig: Config = {
  schema: './src/lib/db/schema.ts',
  out: './src/lib/db/migrations',
  schemaFilter: ['schema'],
};

const developmentConfig: Config = {
  ...baseConfig,
  driver: 'libsql',
  dbCredentials: {
    url,
  },
};

const testingConfig: Config = {
  ...baseConfig,
  driver: 'libsql',
  dbCredentials: { url },
};

const productionConfig: Config = {
  ...baseConfig,
  driver: 'turso',
  dbCredentials: { url, authToken },
  breakpoints: true,
};

export const getDrizzleConfig = (customEnvironment?: Environment) => {
  const environment = customEnvironment || ENVIRONMENT;

  switch (environment) {
    case 'development':
      return developmentConfig;
    case 'test':
      return testingConfig;
    case 'production':
      return productionConfig;
    default:
      return developmentConfig;
  }
};

// const config: Config =
//   ENVIRONMENT === 'production' ? productionConfig : developmentConfig;
const config: Config = getDrizzleConfig();

export default config;
