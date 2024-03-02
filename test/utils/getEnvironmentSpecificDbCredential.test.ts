describe('getDbCredential', () => {
  let originalEnv: NodeJS.ProcessEnv;
  const developmentPrefix = 'DB';
  const testPrefix = 'TESTING_DB';
  const productionPrefix = 'PRODUCTION_DB';
  const key = 'TEST_KEY';
  const developmentValue = `${developmentPrefix}_VALUE`;
  const testValue = `${testPrefix}_VALUE`;
  const productionValue = `${productionPrefix}_VALUE`;

  beforeEach(() => {
    originalEnv = { ...process.env };
    process.env[`${developmentPrefix}_${key}`] = developmentValue;
    process.env[`${testPrefix}_${key}`] = testValue;
    process.env[`${productionPrefix}_${key}`] = productionValue;
  });

  afterEach(() => {
    process.env = originalEnv;
    jest.resetModules();
  });

  it('should return the test environment key value', () => {
    jest.mock('@/lib/config', () => ({
      ENVIRONMENT: 'test',
    }));
    const {
      default: getEnvironmentSpecificDbCredential,
    } = require('@/utils/getEnvironmentSpecificDbCredential');

    const result = getEnvironmentSpecificDbCredential(key);

    expect(result).toBe(testValue);
  });

  it('should return the development environment key value', () => {
    jest.mock('@/lib/config', () => ({
      ENVIRONMENT: 'development',
    }));
    const {
      default: getEnvironmentSpecificDbCredential,
    } = require('@/utils/getEnvironmentSpecificDbCredential');

    const result = getEnvironmentSpecificDbCredential(key);

    expect(result).toBe(developmentValue);
  });

  it('should return undefined when credential does not exist', () => {
    const {
      default: getEnvironmentSpecificDbCredential,
    } = require('@/utils/getEnvironmentSpecificDbCredential');

    const result = getEnvironmentSpecificDbCredential('UNDEFINED_CREDENTIAL');

    expect(result).toBeUndefined();
  });
});
