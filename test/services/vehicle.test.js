const app = require('../../src/app');

describe('\'vehicle\' service', () => {
  it('registered the service', () => {
    const service = app.service('vehicle');
    expect(service).toBeTruthy();
  });
});
