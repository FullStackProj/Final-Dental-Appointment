// app.test.js
const request = require('supertest');
const session = require('supertest-session');
const express = require('express');
const app = express();
const router = require('../routes/loginRoute');
//const main = require('../main');
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

let testSession = null;

beforeEach(function () {
    testSession = session(app);
  });

jest.mock('../models/patient', () => {
  return {
    findOne: jest.fn().mockImplementation((obj) => {
      if (obj.name === 'validName') {
        return Promise.resolve({
          name: 'validName',
          email: 'validEmail',
        });
      } else {
        return Promise.resolve(null);
      }
    }),
  };
});

