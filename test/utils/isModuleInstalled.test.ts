import isModuleInstalled from '../../src/utils/isModuleInstalled';

jest.mock('zod');

describe('isModuleInstalled', () => {
  it('should return true for an installed module', () => {
    expect(isModuleInstalled('zod')).toBe(true);
  });

  it('should return false for a non-installed module', () => {
    expect(isModuleInstalled('nonexistentmodule')).toBe(false);
  });
});
