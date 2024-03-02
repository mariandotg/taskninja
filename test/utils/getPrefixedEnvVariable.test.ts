import getPrefixedEnvVariable from '../../src/utils/getPrefixedEnvVariable';

describe('isModuleInstalled', () => {
  let originalEnv: NodeJS.ProcessEnv;
  const prefix = 'TESTING_PREFIX';
  const key = 'KEY';
  const value = 'VALUE';

  beforeEach(() => {
    originalEnv = { ...process.env };
    process.env[`${prefix}_${key}`] = value;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should return the correct value', () => {
    const prefixedValue = getPrefixedEnvVariable(prefix, key);

    expect(prefixedValue).toBe(value);
  });

  it('should return undefined when the is no key with that prefix', () => {
    const wrongPrefix = 'WRONG_PREFIX';

    const prefixedValue = getPrefixedEnvVariable(wrongPrefix, key);

    expect(prefixedValue).toBe(undefined);
  });

  it('should work with lowercase prefix and key', () => {
    const lowerCasePrefix = 'testing_prefix';
    const lowerCasePey = 'key';

    const prefixedValue = getPrefixedEnvVariable(lowerCasePrefix, lowerCasePey);

    expect(prefixedValue).toBe(value);
  });
});
