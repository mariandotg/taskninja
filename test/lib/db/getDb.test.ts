import { getDb } from '../../../src/lib/db';

describe('getDb', () => {
  it('should return the same instance in consecutive calls', async () => {
    const instance1 = await getDb();
    const instance2 = await getDb();

    expect(instance1).toBe(instance2);
  });
});
