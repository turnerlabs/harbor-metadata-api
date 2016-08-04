/*global describe, it */
'use strict';

const expect = require('chai').expect,
    request = require('supertest'),
    nock = require('nock');

let server = require('../app.js');

function getMockData(name) {
    return `${__dirname}/mocks/${name}.json`;
}

describe('Health check', function () {
    it('should return successfully', function (done) {
        request(server)
            .get('/_hc')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
