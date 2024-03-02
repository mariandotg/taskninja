import { initializeDb } from '../../../src/lib/db/initializeDb';

describe('initializeDb', () => {
  it('should use "default" mode on test environment', async () => {
    const db = await initializeDb();

    expect(db.config.mode).toBe('default');
  });
});
