import { sptClient } from './spt-client';

describe('sptClient', () => {
  it('should work', () => {
    expect(sptClient()).toEqual('spt-client');
  });
});
