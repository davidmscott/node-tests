const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should return "Hello World!" response', (done) => {
			request(app)
				.get('/')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'Page not found.'
					});
				})
				.end(done);
		});
	});

	describe('GET /users', () => {
		it('should return me as a user', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'Dave',
						age: 35
					});
				})
				.end(done);
		});
	});
});