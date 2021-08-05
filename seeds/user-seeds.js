const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Goku',
    password: 'password123'
  },
  {
    username: 'Vegeta',
    password: 'password123'
  },
  {
    username: 'Picollo',
    password: 'password123'
  },
  {
    username: 'Boruto',
    password: 'password123'
  },
  {
    username: 'Sasuke',
    password: 'password123'
  },
  {
    username: 'Naruto',
    password: 'password123'
  },
  {
    username: 'Itachi',
    password: 'password123'
  },
  {
    username: 'Gohan',
    password: 'password123'
  },
  {
    username: 'Kakashi',
    password: 'password123'
  },
  {
    username: 'Buu',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;