import { ENVIRONMENT } from '@/lib/config';
import getPrefixedEnvVariable from './getPrefixedEnvVariable';

/**
 * Fetches the environment variable for a given key, with the prefix determined by the current runtime environment (development, test, or production).
 *
 * The method relies on `getPrefixedEnvVariable` for efficient retrieval, returning the value as "string | undefined," necessitating subsequent validation. */
const getEnvironmentSpecificDbCredential = (key: string) => {
  let prefix;

  switch (ENVIRONMENT) {
    case 'development':
      prefix = 'DB';
      break;
    case 'test':
      prefix = 'TESTING_DB';
      break;
    case 'production':
      prefix = 'PRODUCTION_DB';
      break;
    default:
      prefix = 'DB';
  }

  return getPrefixedEnvVariable(prefix, key);
};

export default getEnvironmentSpecificDbCredential;
