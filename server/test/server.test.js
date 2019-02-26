const app = require('../server');
const testserver = require('supertest');

test('when we go to the logout route we expect a response of 200', () => {
    testserver(app).post('/api/user/logout').then((response) => {
        expect(response.statusCode).toBe(200)
    })
})

test('It should protect /user', () => {
    testserver(app).get('/api/user').then((response) => {
        expect(response.statusCode).toBe(403)
    })
})

test('It should allow logined in users access', () => {
    let agent = testserver.agent(app);
    agent.post('/api/user/login')
        .send({ username: 'max', password: '123' })
        .then((response) => {
            expect(response.statusCode).toBe(200);
            testserver(app).get('/api/user').then((userResponse) => {
                expect(userResponse.statusCode).toBe(200)
            });
        })
})