require('dotenv').config();

const env = process.env.TEST_ENV || 'QA';

module.exports = {
    baseURL: process.env[`${env}_BASE_URL`],
    email: process.env[`${env}_EMAIL`],
    password: process.env[`${env}_PASSWORD`]
};