const request = require('supertest');
const { app } = require('../index');

describe('GET /', () => {
  let server;

  beforeAll(() => {
    // Start test server manually
    server = app.listen(0);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('renders the index page', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});
